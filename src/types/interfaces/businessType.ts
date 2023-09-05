export interface IBusinessTypeOption {
  name: string;
  description: string;
  optionId?: string;
}

export const businessTypeOptions: IBusinessTypeOption[] = [
  {
    name: "Telecommunication",
    description:
      "Companies involved in communication and data transmission services.",
    optionId: "telecommunication",
  },
  {
    name: "Insurance",
    description: "Companies providing insurance and risk management services.",
    optionId: "insurance",
  },
  {
    name: "Transport & Logistics",
    description: "Companies involved in transportation and logistics services.",
    optionId: "transport_logistics",
  },
  {
    name: "Software development",
    description:
      "Companies engaged in software development and technology solutions.",
    optionId: "software_development",
  },
  {
    name: "Agriculture",
    description:
      "Companies involved in farming, crop production, and agricultural services.",
    optionId: "agriculture",
  },
  {
    name: "Fintech and Banking",
    description:
      "Companies providing financial technology and banking services.",
    optionId: "fintech_banking",
  },
  {
    name: "Construction",
    description:
      "Companies engaged in construction and infrastructure development.",
    optionId: "construction",
  },
  {
    name: "Real Estate",
    description:
      "Companies involved in real estate development and property management.",
    optionId: "real_estate",
  },
  // {
  //   name: "Hospitality",
  //   description:
  //     "Companies providing lodging, dining, and entertainment services.",
  //   optionId: "hospitality",
  // },
  // {
  //   name: "Healthcare",
  //   description: "Companies involved in medical and healthcare services.",
  //   optionId: "healthcare",
  // },
  {
    name: "Security Firm",
    description: "Companies providing security and protection services.",
    optionId: "security_firm",
  },
  {
    name: "Education",
    description: "Companies engaged in educational services and institutions.",
    optionId: "education",
  },
  // {
  //   name: "Retail",
  //   description: "Companies involved in retail and consumer goods.",
  //   optionId: "retail",
  // },
  // {
  //   name: "Media & Entertainment",
  //   description: "Companies providing media and entertainment services.",
  //   optionId: "media_entertainment",
  // },
  // {
  //   name: "Automotive",
  //   description: "Companies involved in automotive manufacturing and services.",
  //   optionId: "automotive",
  // },
  // {
  //   name: "Energy & Utilities",
  //   description: "Companies providing energy and utility services.",
  //   optionId: "energy_utilities",
  // },
  // {
  //   name: "Fashion & Apparel",
  //   description:
  //     "Companies engaged in fashion and apparel manufacturing and retail.",
  //   optionId: "fashion_apparel",
  // },
  // {
  //   name: "Manufacturing",
  //   description: "Companies involved in various manufacturing processes.",
  //   optionId: "manufacturing",
  // },
  // {
  //   name: "Pharmaceutical",
  //   description: "Companies engaged in pharmaceutical research and production.",
  //   optionId: "pharmaceutical",
  // },
  // {
  //   name: "Environmental Services",
  //   description:
  //     "Companies providing environmental and sustainability services.",
  //   optionId: "environmental_services",
  // },
  {
    name: "Consulting",
    description:
      "Companies providing professional consulting and advisory services.",
    optionId: "consulting",
  },
  {
    name: "Government",
    description: "Government organizations and public sector services.",
    optionId: "government",
  },
  {
    name: "Non-profit",
    description: "Non-profit organizations and charitable services.",
    optionId: "non_profit",
  },
  {
    name: "Others",
    description: "Other industries not listed above.",
    optionId: "others",
  },
];

/**export interface IBusinessTypeOption {
  name: string;
  description: string;
}

export const businessTypeOptions: IBusinessTypeOption[] = businessType.map((type) => {
  switch (type) {
    case "Telecommunication":
      return {
        name: "Telecommunication",
        description: "Companies involved in communication and data transmission services.",
      };
    case "Insurance":
      return {
        name: "Insurance",
        description: "Companies providing insurance and risk management services.",
      };
    case "Transport & Logistics":
      return {
        name: "Transport & Logistics",
        description: "Companies involved in transportation and logistics services.",
      };
    case "Software development":
      return {
        name: "Software development",
        description: "Companies engaged in software development and technology solutions.",
      };
    case "Agriculture":
      return {
        name: "Agriculture",
        description: "Companies involved in farming, crop production, and agricultural services.",
      };
    case "Fintech and Banking":
      return {
        name: "Fintech and Banking",
        description: "Companies providing financial technology and banking services.",
      };
    case "Construction":
      return {
        name: "Construction",
        description: "Companies engaged in construction and infrastructure development.",
      };
    case "Real Estate":
      return {
        name: "Real Estate",
        description: "Companies involved in real estate development and property management.",
      };
    case "Hospitality":
      return {
        name: "Hospitality",
        description: "Companies providing lodging, dining, and entertainment services.",
      };
    // Add other cases for the remaining business types
    default:
      return {
        name: type,
        description: "",
      };
  }
});
 */
