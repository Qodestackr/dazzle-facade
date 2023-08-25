import {
  Bell,
  BellOff,
  Link,
  LogOut,
  Search,
  UserCircle,
  Home as LucidHome,
  SearchIcon,
} from "lucide-react";

import { Badge } from "@/core/components";

export default function DashboardNav() {
  const allowNotifications = false;
  const isAuthenticated = true;
  return (
    <div className="bg-primary py-4 flex justify-between items-center mb-2">
      <Badge
        variant={"outline"}
        className="py-2 text-white bg-red-400 hover:bg-red-200
             hover:text-white hover:cursor-pointer"
      >
        Plan Activation is Required
      </Badge>

      <div className="flex items-center">
        <div className="relative flex">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Search />
          </span>
          <input
            type="text"
            className="h-10 pl-10 pr-3 border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button className="text-muted-foreground mx-3 hover:text-white">
          {allowNotifications ? <Bell /> : <BellOff />}
        </button>
        <button className="text-muted-foreground mx-3 hover:text-white">
          <UserCircle />
        </button>
      </div>
    </div>
  );
}
