import { ReactNode } from "react";
import Tabbar from "@/components/Tabbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col m-auto gap-10 pt-6">
      <h1 className="font-semibold text-3xl">Company Settings</h1>
      <Tabbar />
      <main>{children}</main>
    </div>
  );
}
