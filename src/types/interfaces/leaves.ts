type LeaveRequestType =
  | "LEAVE_DAYS"
  | "SICK_LEAVE"
  | "MATERNITY_LEAVE"
  | "PATERNITY_LEAVE"
  | "UNPAID_LEAVE"
  | "WORK_FROM_HOME"
  | "COMPASSIONATE_LEAVE"
  | "OTHER";

export interface ILeaveRequest {
  leaveRequestId: string;
  employeeId: string;
  startDate: Date;
  endDate: Date;
  type: LeaveRequestType;
  reason?: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: Date;
  updatedAt: Date;
  reviewedBy?: string;
  comment?: string;
}
