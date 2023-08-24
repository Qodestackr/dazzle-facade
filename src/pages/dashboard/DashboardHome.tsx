import React from "react";
import {
  Home as LucidHome,
  Search,
  Bell,
  BellOff,
  UserCircle,
  LogOut,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Badge } from "@/core/components";
import DashboardSidebar from "@/layouts/dashboard-layouts/sidebar/DashboardSidebar";
import DashboardNav from "@/layouts/dashboard-layouts/DashboardNav";

function DashboardHome() {
  const isAuthenticated = true;
  const allowNotifications = false;
  return (
    <main className="grid lg:grid-cols-[1fr,3fr] h-screen">
      <div className="bg-gray-800 text-white">
        <DashboardSidebar />
      </div>

      <div className="bg-gray-100">
        <DashboardNav />
        <div className="bg-white shadow-md rounded-md">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DashboardHome;
