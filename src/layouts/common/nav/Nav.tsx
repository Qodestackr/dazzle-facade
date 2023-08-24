import React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@core/utils";

const Nav = () => {
  return (
    <nav className="flex items-center justify-evenly py-8 text-white bg-slate-600">
      <div className="text-xl font-semibold">Dazzle HR</div>
      <div className="flex space-x-4">
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white">
          About
        </NavLink>
        <NavLink to="/services" className="text-white">
          Services
        </NavLink>
        <NavLink to="/contact" className="text-white">
          Contact
        </NavLink>
        <NavLink to="/register" className="text-white">
          Register
        </NavLink>
        <NavLink to="/login" className="text-white">
          Login
        </NavLink>

        <NavLink to="/dashboard" className="text-green-800">
          <span className="text-green-400  font-extralight font-sans">
            DASHBOARD TEST
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: any) => {
  return (
    <a href={to} className="hover:text-primary transition-colors">
      {children}
    </a>
  );
};

export default Nav;
