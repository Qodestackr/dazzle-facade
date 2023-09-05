import { Button } from "@/core/components";
import React from "react";

export default function MobileLayoutSection() {
  return (
    <div className="container mx-auto flex flex-col my-3">
      <div className="text-center my-4">
        <h2 className="text-2xl my-2">Level Up With Mobile Management.</h2>
        <p className="text-lg">
          Manage your teams on the go! Stay on top of your game with a <br />
          revolutionary mobile platform that gives you control of your team
          anywhere, anytime.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-slate-700 text-white p-12 md:p-28 rounded-lg">
        <div>
          <p className="text-xl md:text-3xl my-3">
            500+ companies trust Workpay to <br />
            automate their employee management
          </p>
          <p>Download the App on Google Play or the App Store.</p>

          <div className="flex gap-4 my-4">
            <Button>GET IT ON Google Play</Button>
            <Button>Download on the AppStore</Button>
          </div>
        </div>

        {/*  */}
        <div>
          MOBILE IMAGE
          <img src="" alt="" />
        </div>
        {/*  */}
      </div>
    </div>
  );
}
