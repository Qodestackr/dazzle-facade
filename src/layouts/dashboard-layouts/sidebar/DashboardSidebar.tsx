import React from "react";
import { Link } from "react-router-dom";

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
} from "lucide-react";

const sidebarItems = [
  { route: "/", name: "Home", icon: HomeIcon },
  { route: "/payments", name: "Payments", icon: PaymentIcon },
];

const adminItems = [
  { route: "/departments", name: "Departments", icon: DepartmentsIcon },
  { route: "/employees", name: "Employees", icon: EmployeesIcon },
  { route: "/events", name: "Events", icon: EventIcon },
  { route: "/wallet", name: "Wallet", icon: Wallet },
  { route: "/payroll", name: "Payroll", icon: PayrollIcon },
  { route: "/billing", name: "Billing", icon: BillingIcon },
  { route: "/admin-action", name: "Admin Action", icon: AdminActionOnlyIcon },
];

export default function DashboardSidebar() {
  return (
    <aside className="bg-gray-800 text-white w-1/4 min-h-screen p-4">
      <nav>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link
                to={item.route}
                className="flex items-center hover:text-gray-300"
              >
                {React.createElement(item.icon, { size: 24 })}
                <span className="hidden lg:inline-block ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
          <li className="mt-8 mb-4 text-sm text-gray-400 uppercase">Main</li>
          {adminItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link
                to={item.route}
                className="flex items-center hover:text-gray-300"
              >
                {React.createElement(item.icon, { size: 24 })}
                <span className="hidden lg:inline-block ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
