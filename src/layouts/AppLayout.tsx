import React from "react";
import { useAppRoutes } from "@core/hooks/";
import { routes } from "../routes/index.routes";
import Footer from "./common/footer/Footer";
import Nav from "./common/nav/Nav";
import DashboardSidebar from "./dashboard-layouts/sidebar/DashboardSidebar";

type AppLayoutProps = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const isAuthenticated = true;

  const appRoutes = useAppRoutes(routes);

  return (
    <div className="bg-light-background">
      {/* {isAuthenticated ? <DashboardSidebar /> : <Nav />} */}
      {/* <Nav /> */}

      {appRoutes}
      {children}
      {/* {isAuthenticated ? null : <Footer />} */}
    </div>
  );
}
