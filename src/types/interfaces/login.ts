// Discriminated union type for different login user roles
export type UserRole = "superadmin" | "orgadmin" | "employee";

// Interface for common login props
export interface ILoginProps {
  email: string;
  password: string;
  role: UserRole;
}

export interface ISuperAdminLoginProps extends ILoginProps {
  role: "superadmin"; // Discriminant property for SuperAdmin role
}

export interface IOrganizationAdminLoginProps extends ILoginProps {
  role: "orgadmin"; // Discriminant property for OrganizationAdmin role
  organizationId: string;
}

export interface IEmployeeLoginProps extends ILoginProps {
  role: "employee"; // Discriminant property for Employee role
  employeeId: string;
}

// Function to handle login for different user roles
export function handleLogin(loginProps: ILoginProps): void {
  switch (loginProps.role) {
    case "superadmin":
      handleSuperAdminLogin(loginProps as ISuperAdminLoginProps);
      break;
    case "orgadmin":
      handleOrganizationAdminLogin(loginProps as IOrganizationAdminLoginProps);
      break;
    case "employee":
      handleEmployeeLogin(loginProps as IEmployeeLoginProps);
      break;
    default:
      throw new Error("Invalid user role");
  }
}

// Function to handle SuperAdmin login
function handleSuperAdminLogin(loginProps: ISuperAdminLoginProps): void {
  // Perform SuperAdmin login logic here
}

// Function to handle OrganizationAdmin login
function handleOrganizationAdminLogin(
  loginProps: IOrganizationAdminLoginProps
): void {
  // Perform OrganizationAdmin login logic here
}

// Function to handle Employee login
function handleEmployeeLogin(loginProps: IEmployeeLoginProps): void {
  // Perform Employee login logic here
}
