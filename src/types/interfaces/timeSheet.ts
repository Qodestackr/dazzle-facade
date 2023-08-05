export interface IAttendance {
  employeeId: string;
  date: Date;
  clockIn: Date;
  clockOut: Date;
  status: "Present" | "Absent" | "Late" | "Early Departure";
  attendanceRecords: IAttendanceRecord[];
}

export interface IAttendanceRecord {
  recordId: string;
  clockIn: Date;
  clockOut: Date;
  status: "Present" | "Absent" | "Late" | "Early Departure";
}

// Function to calculate total working hours for a given day
export function calculateWorkingHours(clockIn: Date, clockOut: Date): string {
  const diffInMilliseconds = clockOut.getTime() - clockIn.getTime();
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  return `${hours} hours ${minutes} minutes`;
}

// Function to calculate total working hours for a week or a month
export function calculateTotalWorkingHours(
  attendanceRecords: IAttendanceRecord[]
): string {
  let totalMilliseconds = 0;

  for (const record of attendanceRecords) {
    totalMilliseconds += record.clockOut.getTime() - record.clockIn.getTime();
  }

  const totalHours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
  const totalMinutes = Math.floor(
    (totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  return `${totalHours} hours ${totalMinutes} minutes`;
}

// Function to check if an employee was present for a given day
export function isPresent(clockIn: Date, clockOut: Date): boolean {
  return clockIn !== null && clockOut !== null;
}

// Function to check if an employee was late for a given day
export function isLate(clockIn: Date, expectedClockIn: Date): boolean {
  return clockIn > expectedClockIn;
}

// Function to check if an employee left early for a given day
export function isEarlyDeparture(
  clockOut: Date,
  expectedClockOut: Date
): boolean {
  return clockOut < expectedClockOut;
}
