export interface IBillingDetails {
    // subscription details
}

type PaymentMethodType = 'DazzleWallet' | 'Mpesa' | 'Equitel' | 'Flutterwave' | 'Paystack'

// add auto-renew toggle

export interface IBillingHistory {
    invoiceNumber: '';
    dueDate: '11th Dec, 2022';
    Amount: 'KSH. 8,500';
    paymentMethod: PaymentMethodType;
    billingType: 'Subscription' | '...';//...
    status: 'pending'
}