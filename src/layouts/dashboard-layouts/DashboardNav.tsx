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
        Plan Activation Required
      </Badge>

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
