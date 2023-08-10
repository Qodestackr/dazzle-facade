import { QueryClient, QueryClientProvider } from "react-query";

import { SetStateAction, useState } from "react";

import AppLayout from "./layouts/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
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
  },
});

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (value: SetStateAction<string>) => {
    setName(value);
  };

  const handleEmailChange = (value: any) => {
    setEmail(value);
    // Simulate email validation and set error message if email is invalid
    if (!value.includes("@")) {
      setErrorMessage("Please enter a valid email address");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout children={undefined}></AppLayout>
    </QueryClientProvider>
  );
}

export default App;
// Define Error Boundary
// Custom Compose Providers
// Register Providers: Auth/ User/ ..
