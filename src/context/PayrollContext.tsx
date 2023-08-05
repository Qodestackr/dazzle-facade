import React, { createContext, useContext, useState } from "react";

// Define the types for salary components
export type AllowanceType = {
  name: string;
  amount: number;
};

export type DeductionType = {
  name: string;
  amount: number;
};

// Define the shape of the salary details
export interface ISalaryDetails {
  employeeId: string;
  baseSalary: number;
  allowances: AllowanceType[];
  deductions: DeductionType[];
  netSalary: number;
}

// Create the PayrollContext
const PayrollContext = createContext<
  | {
      salaryDetails: ISalaryDetails | undefined;
      setSalaryDetails: (details: ISalaryDetails) => void;
    }
  | undefined
>(undefined);

// PayrollContext Provider component
export function PayrollContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [salaryDetails, setSalaryDetails] = useState<
    ISalaryDetails | undefined
  >(undefined);

  return (
    <PayrollContext.Provider value={{ salaryDetails, setSalaryDetails }}>
      {children}
    </PayrollContext.Provider>
  );
}

// Hook to use the PayrollContext
export function usePayrollContext() {
  const context = useContext(PayrollContext);
  if (!context) {
    throw new Error(
      "usePayrollContext must be used within a PayrollContextProvider"
    );
  }
  return context;
}
