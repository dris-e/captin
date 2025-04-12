import type { Node, NodeTypes } from "@xyflow/react";
import UserNode from "./user-node";
import ProcessNode from "./process-node";
import { UserNodeData } from "./user-node";
import { ProcessNodeData } from "./process-node";

export type CustomNode = Node<UserNodeData | ProcessNodeData>;

export const initialNodes: CustomNode[] = [
  {
    id: "users",
    type: "user",
    position: { x: 0, y: 0 },
    data: { name: "", preferences: [] }
  },
  {
    id: "prompt",
    type: "process",
    position: { x: 400, y: 0 },
    data: { 
      label: "Preferences",
      progress: 0,
      status: "idle" as const
    }
  },
  {
    id: "restaurants",
    type: "process",
    position: { x: 700, y: 0 },
    data: { 
      label: "Finding Restaurants",
      progress: 0,
      status: "idle"
    }
  },
  {
    id: "menu",
    type: "process",
    position: { x: 1000, y: 0 },
    data: { 
      label: "Analyzing Menu Items",
      progress: 0,
      status: "idle"
    }
  },
  {
    id: "results",
    type: "process",
    position: { x: 1300, y: 0 },
    data: { label: "Displaying Results", progress: 0, status: "idle" }
  }
] satisfies CustomNode[];

export const nodeTypes = {
  user: UserNode as any,
  process: ProcessNode as any,
} satisfies NodeTypes;

export type CustomNodeType = CustomNode;