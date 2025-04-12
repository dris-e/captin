import { ReactFlowProvider } from "react-flow-renderer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
}

