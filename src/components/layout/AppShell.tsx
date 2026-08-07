import type { ReactNode } from "react";
import Header from "@/components/features/Header/page";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
    </>
  );
}
