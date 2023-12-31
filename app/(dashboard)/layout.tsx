import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <div className="relative h-full">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
