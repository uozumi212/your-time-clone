"use client";

import { Component, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="max-w-md w-full glass-panel p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              エラーが発生しました
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              申し訳ございません。予期しないエラーが発生しました。
            </p>
            {this.state.error && (
              <pre className="text-sm bg-red-50 dark:bg-red-900/20 p-4 rounded mb-6 text-left overflow-auto text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReset}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              リロードする
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
