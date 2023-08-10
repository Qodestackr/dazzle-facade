import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

import { Integrations } from "@sentry/tracing";

import * as Sentry from "@sentry/react";

import { BrowserRouter } from "react-router-dom";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY,
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

// TODO: https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
