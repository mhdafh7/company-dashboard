"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Tabbar from "@/components/Tabbar";

const queryClient = new QueryClient();
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col m-auto gap-10 pt-6">
        <h1 className="font-semibold text-3xl">Company Settings</h1>
        <Tabbar />
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  );
}
