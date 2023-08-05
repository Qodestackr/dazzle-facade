import React, { createContext, useContext, useState } from "react";

// Define interfaces and types for employee data
export interface Employee {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  hireDate: Date;
  // Add other employee-related properties here
}

export interface AttendanceRecord {
  id: string;
  // Add attendance record properties here
  date: Date;
  clockIn: Date;
  clockOut: Date;
  status: string;
}

export interface LeaveRequest {
  leaveRequestId: string;
  employeeId: string;
  startDate: Date;
  endDate: Date;
  type: string;
  // Add other leave request properties here
}

export interface EmployeesData {
  employees: Employee[];
  attendanceRecords: AttendanceRecord[];
  leaveRequests: LeaveRequest[];
  // Add other employee data properties here
}

// Define the shape of the EmployeesContext data and actions
interface EmployeesContextData {
  employeesData: EmployeesData;
  addEmployee: (employee: Employee) => void;
  removeEmployee: (employeeId: string) => void;
  addAttendanceRecord: (record: AttendanceRecord) => void;
  removeAttendanceRecord: (recordId: string) => void;
  addLeaveRequest: (request: LeaveRequest) => void;
  removeLeaveRequest: (requestId: string) => void;
  // Add other employee actions here
}

// Create the EmployeesContext
const EmployeesContext = createContext<EmployeesContextData | undefined>(
  undefined
);

// EmployeesContext Provider component
export function EmployeesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [employeesData, setEmployeesData] = useState<EmployeesData>({
    employees: [], // Initialize with an empty array of employees
    attendanceRecords: [], // Initialize with an empty array of attendance records
    leaveRequests: [], // Initialize with an empty array of leave requests
    // Add other initial employee data here
  });

  // Function to add a new employee
  const addEmployee = (employee: Employee) => {
    setEmployeesData((prevData) => ({
      ...prevData,
      employees: [...prevData.employees, employee],
    }));
  };

  // Function to remove an employee by employeeId
  const removeEmployee = (employeeId: string) => {
    setEmployeesData((prevData) => ({
      ...prevData,
      employees: prevData.employees.filter(
        (employee) => employee.employeeId !== employeeId
      ),
    }));
  };

  // Function to add a new attendance record
  const addAttendanceRecord = (record: AttendanceRecord) => {
    setEmployeesData((prevData) => ({
      ...prevData,
      attendanceRecords: [...prevData.attendanceRecords, record],
    }));
  };

  // Function to remove an attendance record by recordId
  const removeAttendanceRecord = (recordId: string) => {
    setEmployeesData((prevData) => ({
      ...prevData,
      attendanceRecords: prevData.attendanceRecords.filter(
        (record) => record.id !== recordId
      ),
    }));
  };

  // Function to add a new leave request
  const addLeaveRequest = (request: LeaveRequest) => {
    setEmployeesData((prevData) => ({
      ...prevData,
      leaveRequests: [...prevData.leaveRequests, request],
    }));
  };

  // Function to remove a leave request by requestId
  const removeLeaveRequest = (requestId: string) => {
    setEmployeesData((prevData) => ({
      ...prevData,
      leaveRequests: prevData.leaveRequests.filter(
        (request) => request.leaveRequestId !== requestId
      ),
    }));
  };

  // Other employee actions can be added here

  const employeesContextValue: EmployeesContextData = {
    employeesData,
    addEmployee,
    removeEmployee,
    addAttendanceRecord,
    removeAttendanceRecord,
    addLeaveRequest,
    removeLeaveRequest,
    // Add other employee actions here
  };

  return (
    <EmployeesContext.Provider value={employeesContextValue}>
      {children}
    </EmployeesContext.Provider>
  );
}

// Hook to use the EmployeesContext
export function useEmployeesContext() {
  const context = useContext(EmployeesContext);
  if (!context) {
    throw new Error(
      "useEmployeesContext must be used within an EmployeesContextProvider"
    );
  }
  return context;
}
