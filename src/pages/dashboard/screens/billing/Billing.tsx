import React from "react";
import { CreditCard } from "lucide-react";
import BillingHistoryItem from "./BillingHistory"; // Replace with the actual path

const billingHistory = [
  {
    invoiceNo: "0657",
    dueDate: "11th Dec, 2022",
    amount: 8700,
    paymentMethod: "Mywallet",
    type: "Subscription",
    status: "PENDING",
  },
  // Add more billing history items here
];

export default function Billing() {
  return (
    <section className="mb-8">
      <div className="flex rounded-xs shadow-lg bg-[#62A446] p-4 text-white">
        <div className="w-1/2 pr-6">
          <p className="font-semibold text-lg mb-2">
            Your subscription details appear here on payment
          </p>
          <p className="text-sm">Pending Subscription Payment</p>
          <p className="text-2xl font-bold mt-2">KES 8,700</p>
          <p className="text-sm">For 25 seats + VAT</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="bg-white p-4 rounded-md shadow-md mb-2">
            <CreditCard size={32} className="text-blue-500" />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Pay KES: 8,700
          </button>
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Billing History</h2>
        {billingHistory.map((item, index) => (
          <BillingHistoryItem key={index} {...item} />
        ))}
      </div>
      {/* End Billing History */}
    </section>
  );
}
