"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export type UserNodeData = {
  name: string;
  preferences: string[];
};

export default function UserNode({ data, isConnectable }: NodeProps<any>) {
  const [name, setName] = useState((data as UserNodeData).name || "");
  const [preferences, setPreferences] = useState<string[]>((data as UserNodeData).preferences || []);

  return (
    <Card className="w-[300px]">
      <CardHeader className="text-sm font-semibold">User Details</CardHeader>
      <CardContent className="space-y-4">
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" className="w-full" />
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreferences([...preferences, ""])}>
            Add Preference
          </Button>
        </div>
        {preferences.map((pref, i) => (
          <Input
            key={i}
            value={pref}
            onChange={(e) => {
              const newPrefs = [...preferences];
              newPrefs[i] = e.target.value;
              setPreferences(newPrefs);
            }}
            placeholder="Enter preference..."
            className="w-full"
          />
        ))}
      </CardContent>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </Card>
  );
}
