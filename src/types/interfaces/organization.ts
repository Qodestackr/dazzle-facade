export interface IOrganization {
    name: string | undefined;
    location: {
        //
    },
    industy: string; // have a list of industries,
    country: string
}
// Default to Branch : 'HEAD_OFFICE_BRANCH'

export const HEAD_OFFICE_BRANCH = 'Head Office'


export interface IOrganizationProfile {
    // change password function
    // change profile function
    // delete account profile
    // change subscription type function
    // Edit: (Name, email, phone)
}


// This is for Super Admin