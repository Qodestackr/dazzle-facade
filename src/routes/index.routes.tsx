import { UnderConstruction } from "@core/components";
import Register from "@pages/register/Register";
import Login from "@pages/login/Login";
import Home from "@/pages/home/Home";
import { Home as LucidHome } from "lucide-react";
import ForgotPassword from "@/pages/forgot-password/ForgotPassword";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  {
    path: "/uc",
    element: <UnderConstruction />,
  } /**@uc -> /uc -> under construction */,
];
