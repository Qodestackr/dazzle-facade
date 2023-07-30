type LeaveRequestType = "LEAVE_DAYS" | "";

export interface ILeaveRequest {
  leaveRequestId: string;
  employeeId: string;
  startDate: Date;
  endDate: Date;
  type: LeaveRequestType;
}
