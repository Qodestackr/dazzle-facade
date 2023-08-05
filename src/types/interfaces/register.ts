export interface IRegisterProps {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: "male" | "female" | "other";

  // Address Information
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;

  // Employment Information
  employeeId: string;
  department: string;
  position: string;
  hireDate: Date;

  // Additional Information
  emergencyContactName: string;
  emergencyContactPhone: string;
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  nationality: string;
  passportNumber?: string;
  workPermitNumber?: string;
  socialSecurityNumber?: string;
}

// Register Org

// Register Manager

// Register Employee
