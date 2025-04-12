"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type ProcessNodeData = {
  label: string;
  progress: number;
  status: "idle" | "processing" | "complete";
  component?: React.ReactNode;
};

export default function ProcessNode({ data }: NodeProps<any>) {
  return (
    <Card className="w-[200px]">
      <CardContent>
        <div className="text-sm font-medium mb-2">{(data as ProcessNodeData).label}</div>
        <Progress value={(data as ProcessNodeData).progress} className="h-2" />
        <div className="text-xs text-muted-foreground mt-1">
          {(data as ProcessNodeData).status === "processing" ? "Processing..." : 
           (data as ProcessNodeData).status === "complete" ? "Complete" : "Waiting..."}
        </div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
        {(data as ProcessNodeData).status === "processing" && (data as ProcessNodeData).component}
      </CardContent>
    </Card>
  );
}