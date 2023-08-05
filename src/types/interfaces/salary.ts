export type AllowanceType = {
  name: string;
  amount: number;
};

export type DeductionType = {
  name: string;
  amount: number;
};

export interface ISalaryDetails {
  employeeId: string;
  baseSalary: number;
  allowances: AllowanceType[];
  deductions: DeductionType[];
  netSalary: number;
}

// Function to calculate net salary based on base salary, allowances, and deductions
export function calculateNetSalary(salaryDetails: ISalaryDetails): number {
  const { baseSalary, allowances, deductions } = salaryDetails;

  // Calculate total allowances
  const totalAllowances = allowances.reduce(
    (total, allowance) => total + allowance.amount,
    0
  );

  // Calculate total deductions
  const totalDeductions = deductions.reduce(
    (total, deduction) => total + deduction.amount,
    0
  );

  // Calculate net salary
  const netSalary = baseSalary + totalAllowances - totalDeductions;

  return netSalary;
}

// Example usage:
const salaryDetails: ISalaryDetails = {
  employeeId: "12345",
  baseSalary: 50000,
  allowances: [
    { name: "Housing Allowance", amount: 10000 },
    { name: "Transport Allowance", amount: 5000 },
  ],
  deductions: [
    { name: "Tax", amount: 7500 },
    { name: "Pension Contribution", amount: 5000 },
  ],
  netSalary: 0, // We will calculate this later using the function
};

salaryDetails.netSalary = calculateNetSalary(salaryDetails);
