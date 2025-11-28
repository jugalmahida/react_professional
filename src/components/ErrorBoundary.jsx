import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const { error } = this.state;

      return (
        <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Oops! Something Went Wrong
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              We encountered an unexpected error. Don't worry, our team has been
              notified.
            </p>

            {/* Error Details (Optional - only in development) */}
            {error && import.meta.env.DEV && (
              <div className="mb-8 mx-auto max-w-xl">
                <details className="text-left bg-white rounded-lg p-4 shadow-md border border-red-200">
                  <summary className="cursor-pointer font-semibold text-red-600 hover:text-red-700 mb-2">
                    Error Details (Development Only)
                  </summary>
                  <div className="mt-3 text-sm">
                    <p className="font-mono text-gray-700 mb-2 break-all">
                      <strong>Message:</strong>{" "}
                      {error.message || "Unknown error"}
                    </p>
                    {error.stack && (
                      <pre className="bg-gray-50 p-3 rounded text-xs overflow-auto max-h-48 text-gray-600 border border-gray-200">
                        {error.stack}
                      </pre>
                    )}
                  </div>
                </details>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 border border-gray-200"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="px-6 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="px-6 py-3 bg-linear-to-r from-red-600 to-pink-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Go Home
              </button>
            </div>

            {/* Help Text */}
            <p className="mt-8 text-sm text-gray-500">
              If this problem persists, please contact support
            </p>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center gap-2">
              <div
                className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              />
              <div  
                className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>
      );
    }

    // If there's no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
