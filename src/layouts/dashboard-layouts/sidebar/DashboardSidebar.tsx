import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "@core/hooks";

import {
  HomeIcon,
  MessagesSquare,
  Box as DepartmentsIcon,
  Users as EmployeesIcon,
  CalendarCheck2 as EventIcon,
  Wallet,
  CreditCard as PayrollIcon,
  Receipt as BillingIcon,
  Lock as AdminActionOnlyIcon,
  Banknote as PaymentIcon,
  LogOutIcon
} from "lucide-react";

const sidebarItems = [
  { route: "/dashboard/", name: "Home", icon: HomeIcon },
  { route: "/dashboard/payments", name: "Payments", icon: PaymentIcon },
];

const adminItems = [
  {
    route: "/dashboard/departments",
    name: "Departments",
    icon: DepartmentsIcon,
  },
  { route: "/dashboard/employees", name: "Employees", icon: EmployeesIcon },
  { route: "/dashboard/events", name: "Events", icon: EventIcon },
  { route: "/dashboard/wallet", name: "Wallet", icon: Wallet },
  { route: "/dashboard/payroll", name: "Payroll", icon: PayrollIcon },
  { route: "/dashboard/billing", name: "Billing", icon: BillingIcon },
  // {
  //   route: "/dashboard/",
  //   name: "Admin Action",
  //   icon: AdminActionOnlyIcon,
  // },
  { route: "/login", name: "Logout", icon: LogOutIcon }
];

export default function DashboardSidebar() {
  // const { width } = useWindowSize();
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <aside className="bg-gray-800 text-white"> {/*w - full flex md: p-4 overflow-hidden */}
      <nav>
        <ul className="overflow-hidden flex flex-row gap-4 justify-between items-end md:items-start md:gap-2 md:flex-col">
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link
                to={item.route}
                className="flex items-center hover:text-gray-300"
              >
                {React.createElement(item.icon, { size: 24 })}
                <span className="hidden lg:inline-block ml-2">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <li className="md:mt-8 md:mb-4 text-sm text-gray-400 uppercase hidden md:block">
            Main
          </li>
          {adminItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link
                to={item.route}
                className="flex items-center hover:text-gray-300"
              >
                {React.createElement(item.icon, { size: 24 })}
                <span className="hidden lg:inline-block ml-2">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
