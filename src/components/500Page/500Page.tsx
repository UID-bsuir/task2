import React from "react";
import { logger } from "../../Utils/Logger.ts"; 
import { ErrorBoundaryProps, ErrorBoundaryState } from "./500PageValidator.ts";
import CommonButton from "../Common/CommonButton/CommonButton.tsx";

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logger.logError(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallbackComponent />;
    }
    return this.props.children;
  }
}

const ErrorFallbackComponent = () => (
  <div>
    <h2>Something went wrong!</h2>
    <p>Please try again later or contact support.</p>
    <CommonButton Text="Move on to Main" Type="button" Url="/main"></CommonButton>
  </div>
);
