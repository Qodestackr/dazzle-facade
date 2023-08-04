import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

import { Integrations } from "@sentry/tracing";
import { init } from "@sentry/react";
// import * as Sentry from "@sentry/react";

// import { createBrowserRouter } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

/**Replace "YOUR_SENTRY_DSN" with your actual Sentry DSN (Data Source Name). 
 * You can obtain this DSN by creating a 
 * new project in Sentry and following the setup instructions.

With Sentry initialized, it will automatically capture errors and exceptions 
that occur in your React app and send them to your Sentry project for monitoring 
and debugging.

To capture additional events or breadcrumbs, you can use the captureException, 
captureMessage, or addBreadcrumb methods from the @sentry/react package. 
For example: 

import { captureException } from "@sentry/react";

try {
  // Some code that might throw an error
  throw new Error("This is an example error");
} catch (error) {
  // Capture the error and send it to Sentry
  captureException(error);
}


*/

init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, // Set to 1.0 to capture all transactions
});

/////////////////////////////////////////////////////
//// https://docs.sentry.io/product/sentry-basics/
////////////////////////////////////////////////////

// Sentry.init({
//   dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
//   integrations: [
//     new Sentry.BrowserTracing({
//       // See docs for support of different versions of variation of react router
//       // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
//       routingInstrumentation: Sentry.reactRouterV6Instrumentation(
//         React.useEffect,
//         useLocation,
//         useNavigationType,
//         createRoutesFromChildren,
//         matchRoutes
//       ),
//     }),
//     new Sentry.Replay(),
//   ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   tracesSampleRate: 1.0,

//   // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

//   // Capture Replay for 10% of all sessions,
//   // plus for 100% of sessions with an error
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
