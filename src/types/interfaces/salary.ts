export type AllowanceType = {
  name: string;
  amount: number;
};

export type DeductionType = {};

export interface ISalaryDetails {
  employeeId: string;
  baseSalary: number;
  allowances: AllowanceType[];
  deductions: DeductionType[];
  netSalary: number;
}
