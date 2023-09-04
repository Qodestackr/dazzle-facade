import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@core/components";

import { useWindowSize } from "@core/hooks";
import { NAV_DEFAULT_LINKS } from "@/data/links";

const Nav = () => {
  const { width } = useWindowSize();

  return (
    <nav
      className={`py-8 text-white bg-slate-600 ${
        width <= 640 ? "flex-col" : "flex items-center justify-around"
      }`}
    >
      <div className="text-xl font-semibold">Dazzle HR</div>
      <div className={`flex space-x-4 ${width <= 640 ? "mt-4" : "mt-0"}`}>
        {NAV_DEFAULT_LINKS.map((link, index) => (
          <NavLink key={index} to={link.to} className={link.className}>
            {link.text}
          </NavLink>
        ))}
      </div>
      {width <= 640 && <Menu />}{" "}
      {/*
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      */}
    </nav>
  );
};

const NavLink = ({ to, children, className }: any) => {
  return (
    <Link
      to={to}
      className={`hover:text-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default Nav;
