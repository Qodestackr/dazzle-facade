export interface IOrganization {
  name: string | undefined;
  location: {
    //
  };
  industy: string; // have a list of industries,
  country: string;
}

export interface IOrganizationProfile {
  // change password function
  // change profile function
  // delete account profile
  // change subscription type function
  // Edit: (Name, email, phone)
}

export const DEFAULT_BRANCHES_LIST = [
  "Head Office - Kenya",
  "Nairobi - Kenya",
  "Mombasa - Kenya",
  "Kisumu - Kenya",
  "Eldoret - Kenya",
  "Thika - Kenya",
  "Nakuru - Kenya",

  "Head Office - Ethiopia",
  "Addis Ababa - Ethiopia",
  "Dire Dawa - Ethiopia",
  "Mekelle - Ethiopia",
  "Gondar - Ethiopia",
  "Hawassa - Ethiopia",

  "Head Office - Nigeria",
  "Lagos - Nigeria",
  "Abuja - Nigeria",
  "Kano - Nigeria",
  "Ibadan - Nigeria",
  "Port Harcourt - Nigeria",

  "Head Office - Tanzania",
  "Dar es Salaam - Tanzania",
  "Mwanza - Tanzania",
  "Arusha - Tanzania",
  "Dodoma - Tanzania",
  "Mbeya - Tanzania",

  "Head Office - South Africa",
  "Cape Town - South Africa",
  "Johannesburg - South Africa",
  "Durban - South Africa",
  "Pretoria - South Africa",
  "Port Elizabeth - South Africa",

  "Head Office - Zambia",
  "Lusaka - Zambia",
  "Kitwe - Zambia",
  "Ndola - Zambia",
  "Kabwe - Zambia",
  "Livingstone - Zambia",
];

/**    
// Define types for the functions
type ChangePasswordFn = (oldPassword: string, newPassword: string) => Promise<void>;
type ChangeProfileFn = (updatedProfile: Partial<IOrganization>) => Promise<void>;
type DeleteAccountFn = () => Promise<void>;
type ChangeSubscriptionTypeFn = (newSubscriptionType: string) => Promise<void>;
type EditProfileFieldsFn = (fieldsToUpdate: Partial<IOrganization>) => Promise<void>;

// Define the combined interface
export interface IOrganization extends IOrganizationProfile {
  name: string | undefined;
  location: {
    city: string;
    address: string;
    postalCode: string;
  };
  industry: string;
  country: string;
}

// Define the functions to manipulate data
export interface IOrganizationProfile {
  changePassword: ChangePasswordFn;
  changeProfile: ChangeProfileFn;
  deleteAccount: DeleteAccountFn;
  changeSubscriptionType: ChangeSubscriptionTypeFn;
  editProfileFields: EditProfileFieldsFn;
}

// Implementation of the functions using React Query and Context API
// (Assuming you have setup React Query and Context API correctly)

// Custom hook to use the organization data and functions
export function useOrganization(): IOrganization {
  // Fetch organization data using React Query
  const organizationData = useFetchOrganizationData();

  // Define the functions to manipulate data using Context API
  const changePassword: ChangePasswordFn = (oldPassword, newPassword) => {
    // Call the API to change the password
    return apiCallToChangePassword(oldPassword, newPassword);
  };

  const changeProfile: ChangeProfileFn = (updatedProfile) => {
    // Call the API to change the profile information
    return apiCallToChangeProfile(updatedProfile);
  };

  const deleteAccount: DeleteAccountFn = () => {
    // Call the API to delete the account profile
    return apiCallToDeleteAccount();
  };

  const changeSubscriptionType: ChangeSubscriptionTypeFn = (newSubscriptionType) => {
    // Call the API to change the subscription type
    return apiCallToChangeSubscriptionType(newSubscriptionType);
  };

  const editProfileFields: EditProfileFieldsFn = (fieldsToUpdate) => {
    // Call the API to edit specific fields in the organization profile
    return apiCallToEditProfileFields(fieldsToUpdate);
  };

  // Return the merged organization data and functions
  return {
    ...organizationData,
    changePassword,
    changeProfile,
    deleteAccount,
    changeSubscriptionType,
    editProfileFields,
  };
}

*/
