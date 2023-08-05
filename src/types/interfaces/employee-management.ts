export interface IEmployee {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  hireDate: Date;
  createEmployee: (
    employeeData: Omit<IEmployee, "employeeId">
  ) => Promise<void>;

  updateEmployee: (
    employeeId: string,
    updatedData: Partial<IEmployee>
  ) => Promise<void>;

  deleteEmployee: (employeeId: string) => Promise<void>;
  //....
}


export {}