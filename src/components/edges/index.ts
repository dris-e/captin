import type { Edge, EdgeTypes } from "@xyflow/react";
import ButtonEdge from "./button-edge";

export const initialEdges: Edge[] = [
  { id: "users->prompt", source: "users", target: "prompt" },
  { id: "prompt->restaurants", source: "prompt", target: "restaurants" },
  { id: "restaurants->menu", source: "restaurants", target: "menu" },
  { id: "menu->results", source: "menu", target: "results" },
];

export const edgeTypes = {
  buttonEdge: ButtonEdge as any,
} as EdgeTypes;

export type CustomEdgeType = Edge;