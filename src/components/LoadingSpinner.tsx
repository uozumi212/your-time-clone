export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-purple-200 dark:border-purple-900 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">読み込み中...</p>
      </div>
    </div>
  );
}
