import React from "react";
import { pricingOptions } from "@/data/pricing-feature";
import { Button } from "@/core/components";

interface PricingCardProps {
  plan: string;
  price: string;
  billing: string;
  teams: string;
  agents: string;
  feedback: string;
  support: string;
  analytics: string;
  collaboration: string;
  features: string;
  action: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  billing,
  teams,
  agents,
  feedback,
  support,
  analytics,
  collaboration,
  features,
  action,
}) => {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{plan}</h2>
      <div className="flex items-center mt-4">
        <span className="text-2xl font-bold">{price}</span>
        <span className="ml-1 text-gray-600">{billing}</span>
      </div>
      <p className="mt-4">{teams}</p>
      <p>{agents}</p>
      <p>{feedback}</p>
      <p>{support}</p>
      <p>{analytics}</p>
      <p>{collaboration}</p>
      <p>{features}</p>
      <Button className="mt-2">{action}</Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

// const pricingOptions: PricingCardProps[] = [
//   {
//     plan: "Lite",
//     price: "$12",
//     billing: "/month",
//     teams: "1 Team",
//     agents: "1 Installed Agent",
//     feedback: "Real Time Feedback",
//     support: "Video Support",
//     analytics: "Reporting Tools and Analytics",
//     collaboration: "Team Collaboration Tools",
//     features: "Authorized updated features",
//     action: "BOOK FREE DEMO",
//   },
//   // Add other pricing options
// ];

export default PricingSection;
