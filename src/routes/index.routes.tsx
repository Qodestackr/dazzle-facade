import { UnderConstruction } from "@core/components";
import Register from "@/pages/register/Register";
import Home from "@/pages/home/Home";
import { Home as LucidHome } from "lucide-react";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "register", element: <Register /> },
  {
    path: "/uc",
    element: <UnderConstruction />,
  } /**@uc -> /uc -> under construction */,
];
