/**
 * Global Debug
 * - This exposes modules to window object for debugging purposes.
 * - TODO: Remove in production
 */

import * as react from "react";
// import { faker } from "@faker-js/faker";
// import * as utils from "@core/utils";
// import * as plugins from "@core/plugins";

const CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID || window._env_.VITE_GOOGLE_CLIENT_ID!;

declare global {
  interface Window {
    _env_: {
      VITE_NAME?: string;
      VITE_GOOGLE_CLIENT_ID?: string;
      VITE_GOOGLE_REDIRECT_URL_SIGNUP?: string;
      VITE_GITHUB_CLIENT_ID?: string;
      VITE_GITHUB_REDIRECT_URL_SIGNUP?: string;
      VITE_GITHUB_REDIRECT_URL_LOGIN?: string;
      VITE_LINKEDIN_CLIENT_ID?: string;
      VITE_LINKEDIN_REDIRECT_URL_SIGNUP?: string;
      VITE_LINKEDIN_REDIRECT_URL_LOGIN?: string;
      VITE_BASE_URL?: string;
    };
  }
}
