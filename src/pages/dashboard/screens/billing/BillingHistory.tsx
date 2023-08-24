import React from "react";

function BillingHistoryItem({
  invoiceNo,
  dueDate,
  amount,
  paymentMethod,
  type,
  status,
}: any) {
  return (
    <div className="flex rounded-xs shadow-lg bg-white p-6 mb-4">
      <div className="w-1/6">
        <p className="font-semibold">{invoiceNo}</p>
      </div>
      <div className="w-1/6">
        <p>{dueDate}</p>
      </div>
      <div className="w-1/6">
        <p>KES {amount}</p>
      </div>
      <div className="w-1/6">
        <p>{paymentMethod}</p>
      </div>
      <div className="w-1/6">
        <p>{type}</p>
      </div>
      <div className="w-1/6">
        <p
          className={
            status === "PENDING" ? "text-yellow-600" : "text-green-600"
          }
        >
          {status}
        </p>
      </div>
    </div>
  );
}

export default BillingHistoryItem;
