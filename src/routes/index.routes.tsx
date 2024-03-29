// import { UnderConstruction } from "@core/components";
// import Register from "@pages/register/Register";
// import Login from "@pages/login/Login";
// import Home from "@/pages/home/Home";
// import ForgotPassword from "@/pages/forgot-password/ForgotPassword";
// import DashboardHome from "@/pages/dashboard/DashboardHome";
// import Billing from "@/pages/dashboard/screens/billing/Billing";

// export const routes = [
//   { path: "/", element: <Home /> },
//   { path: "register", element: <Register /> },
//   { path: "/login", element: <Login /> },
//   { path: "/forgot-password", element: <ForgotPassword /> },
//   {
//     path: "/dashboard",
//     element: <DashboardHome />,
//     children: [
//       { path: "employees", element: <UnderConstruction /> },
//       {
//         path: "billing",
//         element: <Billing />,
//         children: [{ path: "settings", element: <UnderConstruction /> }],
//       },
//       {
//         path: "payments",
//         element: <UnderConstruction />,
//         children: [
//           { path: "balances", element: <UnderConstruction /> },
//           { path: "bulk-payments", element: <UnderConstruction /> },
//           { path: "statutory-payments", element: <UnderConstruction /> },
//           { path: "account-statement", element: <UnderConstruction /> },
//           // Add more nested routes for payments here
//         ],
//       },
//       { path: "wallet", element: <UnderConstruction /> },
//       { path: "messages", element: <UnderConstruction /> },
//       { path: "departments", element: <UnderConstruction /> },
//       { path: "events", element: <UnderConstruction /> },
//       { path: "notice-board", element: <UnderConstruction /> },
//       { path: "projects", element: <UnderConstruction /> },
//       { path: "payroll", element: <UnderConstruction /> },
//       { path: "documents", element: <UnderConstruction /> },
//       { path: "backups", element: <UnderConstruction /> },
//     ],
//   },
//   {
//     path: "/*",
//     element: <UnderConstruction />,
//   },
// ];

import { Route, Routes } from "react-router-dom";
import { UnderConstruction } from "@core/components";
import Register from "@pages/register/Register";
import Login from "@pages/login/Login";
import Home from "@/pages/home/Home";
import ForgotPassword from "@/pages/forgot-password/ForgotPassword";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import Billing from "@/pages/dashboard/screens/billing/Billing";
import RequestDemo from "@/pages/request-demo/RequestDemo";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/demo-request" element={<Login />} />

    <Route path="/dashboard" element={<DashboardHome />}>
      <Route path="employees" element={<UnderConstruction />} />
      <Route path="billing" element={<Billing />}>
        <Route path="settings" element={<UnderConstruction />} />
      </Route>
      <Route path="payments" element={<UnderConstruction />}>
        <Route path="balances" element={<UnderConstruction />} />
        <Route path="bulk-payments" element={<UnderConstruction />} />
        <Route path="statutory-payments" element={<UnderConstruction />} />
        <Route path="account-statement" element={<UnderConstruction />} />
      </Route>
    </Route>
    <Route path="*" element={<UnderConstruction />} />
  </Routes>
);

export default routes;
