import { Link } from "react-router-dom";
import { NAV_DEFAULT_LINKS } from "@/data/links";

const Nav = () => {
  return (
    <nav className="flex items-center justify-evenly py-8 text-white bg-slate-600">
      <div className="text-xl font-semibold">Dazzle HR</div>
      <div className="flex space-x-4">
        {NAV_DEFAULT_LINKS.map((link, index) => (
          <NavLink key={index} to={link.to} className={link.className}>
            {link.text}
          </NavLink>
        ))}
      </div>
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
