"use client";

import { useCallback, useState } from "react";
import { Background, Controls, MiniMap, ReactFlow, addEdge, useNodesState, useEdgesState, type OnConnect } from "@xyflow/react";
import { Button } from "@/components/ui/button";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes, type CustomNodeType } from "@/components/nodes";
import { initialEdges, edgeTypes, type CustomEdgeType } from "@/components/edges";
import { preferencesSim, restaurantsSim, analysisSim } from "@/lib/simulation";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>(initialEdges);

  const [isSimulating, setIsSimulating] = useState(false);

  const onConnect: OnConnect = useCallback((connection) => setEdges((edges) => addEdge(connection, edges)), [setEdges]);

  const addNewUser = useCallback(() => {
    const position = { x: 0, y: nodes.length * 50 };
    setNodes((nds) => [
      ...nds,
      {
        id: `user-${nodes.length + 1}`,
        type: "user",
        position,
        data: { name: "", preferences: [] },
      },
    ]);
  }, [nodes.length, setNodes]);

  const updateNode = useCallback(
    (id: string, progress: number, status: "idle" | "processing" | "complete") => {
      setNodes((nodes) => nodes.map((node) => (node.id === id ? { ...node, data: { ...node.data, progress, status } } : node)));
    },
    [setNodes]
  );

  const router = useRouter();

  const runSimulation = async () => {
    if (isSimulating) return;
    setIsSimulating(true);

    try {
      const userNodes = nodes.filter((n) => n.type === "user");
      const allPreferences = userNodes.flatMap((n) => n.data.preferences);

      updateNode("prompt", 0, "processing");
      const refinedPreferences = await preferencesSim(allPreferences);
      updateNode("prompt", 100, "complete");

      updateNode("restaurants", 0, "processing");
      const restaurants = await restaurantsSim(refinedPreferences);
      updateNode("restaurants", 100, "complete");

      updateNode("menu", 0, "processing");
      const menuItems = await analysisSim(restaurants, refinedPreferences);
      updateNode("menu", 100, "complete");

      updateNode("results", 100, "complete");

      router.push("/loading");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="overflow-hidden h-screen w-screen">
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        <Button onClick={addNewUser} variant="outline" className="rounded-full">
          Add User
        </Button>
        <Button disabled={isSimulating} onClick={runSimulation} variant="action" className="rounded-full font-bold">
          {isSimulating ? "Simulating..." : "Run Simulation"}
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <ReactFlow<CustomNodeType, CustomEdgeType>
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView>
        <Background />
        {/* <MiniMap /> */}
        <Controls />
      </ReactFlow>
    </div>
  );
}
