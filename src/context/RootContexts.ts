// RootContext (contains global state)

// UserContext (user-related state and actions)

// EmployeesContext (employee-related state and actions)

// SettingsContext (app settings state and actions)

// LeaveContext (leave-related state and actions)

// PayrollContext (payroll-related state and actions)

// NotificationsContext (notification-related state and actions)

// TeamsContext (team-related state and actions)

// ProjectsContext (project-related state and actions)

// TasksContext (task-related state and actions)

// AdminContext (admin-related state and actions)

// BackupContext (backup-related state and actions)

// DataDownloadContext (data download state and actions)

// MessagingContext (messaging-related state and actions)

// AnnouncementsContext (announcement-related state and actions)

// CheckInContext (employee check-in state and actions)

// SubscriptionContext (subscription-related state and actions)

// BillingContext (billing-related state and actions)

// OrganizationSetupContext (organization setup state and actions)

const actionTypes = [
  // UserContext
  {
    context: "UserContext",
    actions: ["REGISTER_USER", "LOGIN_USER", "LOGOUT_USER"],
  },

  // EmployeesContext
  {
    context: "EmployeesContext",
    actions: [
      "ADD_EMPLOYEE",
      "REMOVE_EMPLOYEE",
      "UPDATE_EMPLOYEE",
      "GET_EMPLOYEES",
    ],
  },

  // SettingsContext
  {
    context: "SettingsContext",
    actions: ["SET_THEME", "SET_LANGUAGE"],
  },

  // LeaveContext
  {
    context: "LeaveContext",
    actions: [
      "APPLY_FOR_LEAVE",
      "CANCEL_LEAVE",
      "APPROVE_LEAVE",
      "REJECT_LEAVE",
      "GET_LEAVE_HISTORY",
    ],
  },

  // PayrollContext
  {
    context: "PayrollContext",
    actions: ["PROCESS_PAYROLL", "GET_PAYSLIP", "UPDATE_SALARY_COMPONENTS"],
  },

  // NotificationsContext
  {
    context: "NotificationsContext",
    actions: ["SHOW_NOTIFICATION", "HIDE_NOTIFICATION", "CLEAR_NOTIFICATIONS"],
  },

  // TeamsContext
  {
    context: "TeamsContext",
    actions: [
      "CREATE_TEAM",
      "ADD_TEAM_MEMBER",
      "REMOVE_TEAM_MEMBER",
      "UPDATE_TEAM_INFO",
    ],
  },

  // ProjectsContext
  {
    context: "ProjectsContext",
    actions: [
      "CREATE_PROJECT",
      "ADD_PROJECT_MEMBER",
      "REMOVE_PROJECT_MEMBER",
      "UPDATE_PROJECT_INFO",
    ],
  },

  // TasksContext
  {
    context: "TasksContext",
    actions: ["CREATE_TASK", "ASSIGN_TASK", "COMPLETE_TASK", "UPDATE_TASK"],
  },

  // AdminContext
  {
    context: "AdminContext",
    actions: ["UPDATE_USER_PERMISSIONS", "DELETE_USER"],
  },

  // BackupContext
  {
    context: "BackupContext",
    actions: ["SCHEDULE_BACKUP", "GET_BACKUP_STATUS"],
  },

  // DataDownloadContext
  {
    context: "DataDownloadContext",
    actions: ["DOWNLOAD_DATA"],
  },

  // MessagingContext
  {
    context: "MessagingContext",
    actions: ["SEND_MESSAGE"],
  },

  // AnnouncementsContext
  {
    context: "AnnouncementsContext",
    actions: [
      "CREATE_ANNOUNCEMENT",
      "DELETE_ANNOUNCEMENT",
      "UPDATE_ANNOUNCEMENT",
    ],
  },

  // CheckInContext
  {
    context: "CheckInContext",
    actions: ["CHECK_IN_EMPLOYEE"],
  },

  // SubscriptionContext
  {
    context: "SubscriptionContext",
    actions: [
      "SUBSCRIBE_PLAN",
      "CANCEL_SUBSCRIPTION",
      "UPDATE_PAYMENT_METHOD",
      "GET_INVOICE",
    ],
  },

  // BillingContext
  {
    context: "BillingContext",
    actions: ["PROCESS_PAYMENT"],
  },

  // OrganizationSetupContext
  {
    context: "OrganizationSetupContext",
    actions: [
      "CREATE_ORGANIZATION",
      "UPDATE_ORGANIZATION_DETAILS",
      "SET_UP_HR_PLATFORM",
    ],
  },
];

console.log(actionTypes);
