import { Link } from "react-router-dom";
import {
  GITHUB_LINK,
  PRIMARY_FOOTER_LINKS,
  SERVICE_FOOTER_LINKS,
  PRODUCTS_FOOTER_LINKS,
} from "@/data/links";
import { Button, Input } from "@/core/components";

export default function Footer() {
  return (
    <footer className="w-[80vw] mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center items-center" aria-label="subscribe">
          <h2>Dazzle HR</h2>
          <div className="flex justify-center items-center gap-4">
            <Input label="No spam. Subscribe for updates" className="" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>

        <div className="flex flex-col">
          <h2>PRIMARY</h2>
          <ul>
            {PRIMARY_FOOTER_LINKS.map((link) => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h2>SERVICE</h2>
          <ul>
            {SERVICE_FOOTER_LINKS.map((link) => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h2>PRODUCTS</h2>
          <ul>
            {PRODUCTS_FOOTER_LINKS.map((link) => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        2023; Dazzle HR &trade; - All Rights reserved. Source code:{" "}
        <Link to={GITHUB_LINK}>GitHub</Link>
      </div>
    </footer>
  );
}
