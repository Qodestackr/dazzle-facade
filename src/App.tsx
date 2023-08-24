import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"; //y Devtools

import { UnderConstruction } from "@core/components";
import Register from "@pages/register/Register";
import Login from "@pages/login/Login";
import Home from "@/pages/home/Home";
import ForgotPassword from "@/pages/forgot-password/ForgotPassword";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import Billing from "@/pages/dashboard/screens/billing/Billing";

const queryClient = new QueryClient({
  defaultOptions: {
    //queries and mutations
    queries: {
      staleTime: 10000,
      cacheTime: 60000,
      refetchOnMount: false,

      /**
       * This callback will fire any time the query successfully fetches new data or the cache is updated via `setQueryData`.
       */
      onSuccess: (data: unknown) => {},
      // onError?: (err: TError) => void;

      onSettled: (data: unknown | undefined) => {},
      /**
       * Whether errors should be thrown instead of setting the `error` property.
       * If set to `true` or `suspense` is `true`, all errors will be thrown to the error boundary.
       * If set to `false` and `suspense` is `false`, errors are returned as state.
       * If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (`true`) or return the error as state (`false`).
       * Defaults to `false`.
       */
      useErrorBoundary: true,
      retry: 3,
      refetchOnWindowFocus: false,

      optimisticResults: true,
    },
    // mutations: {}
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashboardHome />}>
          <Route path="employees" element={<UnderConstruction />} />
          <Route path="billing" element={<Billing />}>
            <Route path="settings" element={<UnderConstruction />} />
          </Route>
          <Route path="payments" element={<UnderConstruction />}>
            <Route path="balances" element={<UnderConstruction />} />
            <Route path="bulk-payments" element={<UnderConstruction />} />
            <Route path="statutory-payments" element={<UnderConstruction />} />
            <Route path="account-statement" element={<UnderConstruction />} />
          </Route>
          {/* Add more nested routes for dashboard */}
        </Route>
        <Route path="*" element={<UnderConstruction />} />
      </Routes>

      {/* Add React Query Devtools if you want to use it */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
