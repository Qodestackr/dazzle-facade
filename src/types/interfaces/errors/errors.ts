import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  showDialog?: boolean;
  dialogOptions?: any;
  onError?: (error: Error, componentStack: string) => void;
  onMount?: () => void;
  onUnmount?: () => void;
  beforeCapture?: (scope: any, error: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  componentStack: string | null;
}
