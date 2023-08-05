import React, { ErrorInfo, useEffect, useState } from "react";
import * as Sentry from "@sentry/react";
import { cn } from "../../utils/styles/classnames";

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  showDialog?: boolean;
  dialogOptions?: any;
  onError?: (error: Error, componentStack: string) => void;
  beforeCapture?: (scope: any, error: ErrorInfo) => void;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  fallback,
  showDialog = false,
  dialogOptions = {},
  onError,
  beforeCapture,
  children,
}) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [componentStack, setComponentStack] = useState<string | null>(null);

  useEffect(() => {
    const errorHandler = (error: Error, errorInfo: ErrorInfo) => {
      setError(error);
      setComponentStack(errorInfo.componentStack);
      setHasError(true);

      // Optionally, send the error to Sentry or perform other actions
      reportErrorToSentry(error, errorInfo);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  useEffect(() => {
    if (hasError && showDialog) {
      Sentry.showReportDialog({
        ...dialogOptions,
        error,
      });
    }
  }, [hasError, showDialog, dialogOptions, error]);

  const reportErrorToSentry = (error: Error, errorInfo: ErrorInfo) => {
    if (beforeCapture) {
      Sentry.withScope((scope) => {
        beforeCapture(scope, errorInfo);
        Sentry.captureException(error);
      });
    } else {
      Sentry.captureException(error);
    }

    if (onError) {
      onError(error, errorInfo.componentStack);
    }
  };

  return hasError ? fallback : children;
};

export default ErrorBoundary;

// function FallbackComponent() {
//   return <div>An error has occurred</div>;
// }
////////////////////////////////////
// const myFallback = <FallbackComponent />;
///////////////////////////////////
// <ErrorBoundary fallback={myFallback} showDialog>
//   <Example />
// </ErrorBoundary>;
