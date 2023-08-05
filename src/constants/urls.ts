export const GET_EMPLOYEES_URL = "/api/employees";
export const ADD_EMPLOYEE_URL = "/api/employees/add";
export const UPDATE_EMPLOYEE_URL = "/api/employees/update";
export const DELETE_EMPLOYEE_URL = "/api/employees/delete";
export const GET_EMPLOYEE_DETAILS_URL = (employeeId: string) =>
  `/api/employees/${employeeId}`;
export const EMPLOYEE_ATTENDANCE_URL = (employeeId: string) =>
  `/api/employees/${employeeId}/attendance`;

export const GET_LEAVE_REQUESTS_URL = "/api/leave-requests";
export const ADD_LEAVE_REQUEST_URL = "/api/leave-requests/add";
export const UPDATE_LEAVE_REQUEST_URL = "/api/leave-requests/update";
export const DELETE_LEAVE_REQUEST_URL = "/api/leave-requests/delete";

/*
export const GET_LEAVE_REQUESTS_URL = "/api/leave-requests";
export const ADD_LEAVE_REQUEST_URL = "/api/leave-requests/add";
export const UPDATE_LEAVE_REQUEST_URL = "/api/leave-requests/update";
export const DELETE_LEAVE_REQUEST_URL = (leaveRequestId: string) =>
  `/api/leave-requests/${leaveRequestId}`;
export const GET_LEAVE_REQUEST_DETAILS_URL = (leaveRequestId: string) =>
  `/api/leave-requests/${leaveRequestId}`;
export const APPROVE_LEAVE_REQUEST_URL = (leaveRequestId: string) =>
  `/api/leave-requests/${leaveRequestId}/approve`;
export const REJECT_LEAVE_REQUEST_URL = (leaveRequestId: string) =>
  `/api/leave-requests/${leaveRequestId}/reject`;
*/

export const GET_NOTIFICATIONS_URL = "/api/notifications";
export const MARK_NOTIFICATION_READ_URL = "/api/notifications/mark-read";
export const DELETE_NOTIFICATION_URL = "/api/notifications/delete";
// export const MARK_NOTIFICATION_READ_URL = (notificationId: string) =>
//   `/api/notifications/${notificationId}/mark-read`;
// export const DELETE_NOTIFICATION_URL = (notificationId: string) =>
//   `/api/notifications/${notificationId}/delete`;

export const GET_PAYROLL_URL = "/api/payroll";
export const GENERATE_PAYSLIPS_URL = "/api/payroll/generate-payslips";
export const GET_PAYSLIP_URL = (payrollId: string) =>
  `/api/payroll/${payrollId}/payslip`;

export const GET_SETTINGS_URL = "/api/settings";
export const UPDATE_SETTINGS_URL = "/api/settings/update";

export const BACKUP_SETTINGS_URL = "/api/settings/backup";
export const RESTORE_SETTINGS_URL = "/api/settings/restore";

export const CREATE_BACKUP_URL = "/api/backup/create";
export const RESTORE_BACKUP_URL = "/api/backup/restore";
export const DELETE_BACKUP_URL = "/api/backup/delete";
export const DOWNLOAD_BACKUP_URL = (backupId: string) =>
  `/api/backup/${backupId}/download`;

export const GET_REPORTS_URL = "/api/reports";
export const GENERATE_REPORT_URL = "/api/reports/generate";
export const GET_REPORT_URL = (reportId: string) => `/api/reports/${reportId}`;
export const DOWNLOAD_REPORT_URL = (reportId: string) =>
  `/api/reports/${reportId}/download`;

export const LOGIN_URL = "/api/login";
export const SIGNUP_URL = "/api/signup";
export const RESET_PASSWORD_URL = "/api/reset-password";
export const CHANGE_PASSWORD_URL = "/api/change-password";
//...
export const CREATE_USER_FROM_SUPER_ADMIN = "";

export const GET_SUPER_ADMIN_URL = "/api/super-admin";
export const UPDATE_SUPER_ADMIN_URL = "/api/super-admin/update";

export const GET_BILLING_DETAILS_URL = "/api/billing/details";
export const UPDATE_BILLING_DETAILS_URL = "/api/billing/update";
export const SUBSCRIBE_PLAN_URL = "/api/billing/subscribe-plan";
export const CANCEL_SUBSCRIPTION_URL = "/api/billing/cancel-subscription";

// SSO
export const SSO_LOGIN_URL = "/api/sso/login";
export const SSO_LOGOUT_URL = "/api/sso/logout";
export const SSO_CALLBACK_URL = "/api/sso/callback";

// Redirects
export const REDIRECT_HOME = "/";
export const REDIRECT_LOGIN = "/login";
export const REDIRECT_DASHBOARD = "/dashboard";
export const REDIRECT_EMPLOYEES = "/employees";
export const REDIRECT_LEAVE = "/leave";
export const REDIRECT_PAYROLL = "/payroll";
export const REDIRECT_SETTINGS = "/settings";
