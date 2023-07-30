
function PaymentNotActivated() {
  return (
    <section id="payout-not-activated">
      <h3>
        Payouts service has not been activated for{" "}
        {"DATUM" /**OR an Company name */}.
      </h3>

      <h3>Documents required</h3>
      {/*         
        1. Company Registration Certificate
        2. Company Pin Certificate
        3. Company CR12
        4. Company Directors
        5. ID Copy
        6. Pin Certicate
        7. ID Copy and Pin Certificate of other users with permission to make payouts.
        
        */}

      {/* Subscription activates a company: Support via email reach */}
      <button>contact support to activate</button>
    </section>
  );
}

export default PaymentNotActivated