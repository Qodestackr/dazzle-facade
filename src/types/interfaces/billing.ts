export interface IBillingDetails {
  subscriptionPlan: string;
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
}

type PaymentMethodType =
  | "DazzleWallet"
  | "Mpesa"
  | "Equitel"
  | "Flutterwave"
  | "Paystack";

export interface IBillingHistory {
  invoiceNumber: string;
  dueDate: Date;
  amount: number;
  paymentMethod: PaymentMethodType;
  billingType: "Subscription" | "...";
  status: "pending" | "paid" | "overdue";
}
