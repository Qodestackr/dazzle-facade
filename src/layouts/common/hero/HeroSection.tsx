import React from "react";
import HeroSectionIMG from "@assets/images/hero-section.png";
import { Button } from "@core/components";

export default function HeroSection() {
  return (
    <section className="w-11/12 mx-auto">
      {/* flex flex-col md:flex-row justify-between items-center gap-12 mt-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col md:w-9/12">
          <span className="">
            Simple. Compliant. Affordable: The People Operating System
          </span>

          <span className="font-medium text-xl md:text-3xl">
            Dazzle is the HR-Ops, Everything Starts With
            <br />
            People.
          </span>

          <Button className="my-4">Book A Demo</Button>
        </div>

        <div>
          <img
            src={HeroSectionIMG}
            alt="Hero Section Image"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
