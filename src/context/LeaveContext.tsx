/** Manages leave-related data and functionalities.
 * Includes features for applying for leave, viewing leave history, and leave approval workflows.
 */
import React, { createContext, useContext, useState } from "react";

// Define interfaces and types for leave-related data
export interface LeaveApplication {
  leaveRequestId: string;
  employeeId: string;
  startDate: Date;
  endDate: Date;
  type: string;
  status: "pending" | "approved" | "rejected";
  // Add other leave application properties here
}

export interface LeaveHistory {
  leaveRequestId: string;
  employeeId: string;
  startDate: Date;
  endDate: Date;
  type: string;
  status: "approved" | "rejected";
  // Add other leave history properties here
}

// Define the shape of the LeaveContext data and actions
interface LeaveContextData {
  leaveApplications: LeaveApplication[];
  leaveHistory: LeaveHistory[];
  applyLeave: (leaveRequest: LeaveApplication) => void;
  approveLeave: (leaveRequestId: string) => void;
  rejectLeave: (leaveRequestId: string) => void;
  // Add other leave-related actions here
}

// Create the LeaveContext
const LeaveContext = createContext<LeaveContextData | undefined>(undefined);

// LeaveContext Provider component
export function LeaveContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [leaveApplications, setLeaveApplications] = useState<
    LeaveApplication[]
  >([]);
  const [leaveHistory, setLeaveHistory] = useState<LeaveHistory[]>([]);

  // Function to apply for leave
  const applyLeave = (leaveRequest: LeaveApplication) => {
    setLeaveApplications((prevApplications) => [
      ...prevApplications,
      leaveRequest,
    ]);
  };

  // Function to approve leave by leaveRequestId
  const approveLeave = (leaveRequestId: string) => {
    setLeaveApplications((prevApplications) =>
      prevApplications.map((application) =>
        application.leaveRequestId === leaveRequestId
          ? { ...application, status: "approved" }
          : application
      )
    );

    setLeaveHistory((prevHistory) => [
      ...prevHistory,
      {
        ...leaveApplications.find(
          (app) => app.leaveRequestId === leaveRequestId
        )!,
        status: "approved",
      },
    ]);
  };

  // Function to reject leave by leaveRequestId
  const rejectLeave = (leaveRequestId: string) => {
    setLeaveApplications((prevApplications) =>
      prevApplications.map((application) =>
        application.leaveRequestId === leaveRequestId
          ? { ...application, status: "rejected" }
          : application
      )
    );

    setLeaveHistory((prevHistory) => [
      ...prevHistory,
      {
        ...leaveApplications.find(
          (app) => app.leaveRequestId === leaveRequestId
        )!,
        status: "rejected",
      },
    ]);
  };

  // Other leave-related actions can be added here

  const leaveContextValue: LeaveContextData = {
    leaveApplications,
    leaveHistory,
    applyLeave,
    approveLeave,
    rejectLeave,
    // Add other leave-related actions here
  };

  return (
    <LeaveContext.Provider value={leaveContextValue}>
      {children}
    </LeaveContext.Provider>
  );
}

// Hook to use the LeaveContext
export function useLeaveContext() {
  const context = useContext(LeaveContext);
  if (!context) {
    throw new Error(
      "useLeaveContext must be used within a LeaveContextProvider"
    );
  }
  return context;
}
