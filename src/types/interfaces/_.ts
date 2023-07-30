export interface IErrorResponse {
  statusCode: number;
  errorMessages: string[];
  timestamp: number;
}

export interface IChangePasswordProps {
  oldPassword: string;
  newPassword: string;
}

export interface IProfileQueryResponse {
  userName?: string;
  dateOfBirth?: string | number | Date;
  email: string;
  linkToResume: string;
  phoneNumber?: string;
  profilePictureUrl?: string;
  linkedinUrl?: string;
  mentorShipSessions?: any[];
  mentorshipAvailabilites?: any[];
  userCalendars: { calendarId: string; calendarType: string }[];
  fieldsOfInterest?: any[];
  areasOfExpertise?: any[];
  rating?: number;
  country?: string;
  gender?: string;
  jobTitle?: string;
  levelOfExperience?: string;
  companyName?: string;
}

export interface CreateProfilePayload {
  profilePicture?: string;
  timezone?: string /**| ITimezone **/;
  businessType?: string;
  phoneNumber: string;
  branches: any[]; // list of locations
  nationality?: string;
  companyName?: string;
  linkedinUrl: string;
}
