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
    <footer className="w-[80vw] mx-auto bg-light-background">
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="flex justify-center items-center"
            aria-label="subscribe"
          >
            <h2>Dazzle HR</h2>
            <div className="flex justify-center items-center gap-4">
              <Input
                type="email"
                label="No spam. Subscribe for updates"
                className=""
                placeholder="johndoe@gmail.com"
              />
              <Button variant="secondary" className="bg-primary text-white">
                Subscribe
              </Button>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-4 justify-between items-center">
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
          {/*  */}
        </div>

        <div className="flex justify-center items-center">
          2023 Dazzle HR &trade; • All Rights reserved. Source code:
          <Link to={GITHUB_LINK} className="mx-2 text-green-500">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
