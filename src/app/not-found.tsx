import Link from "next/link";
import Navigation from "@/components/Navigation";
import { Clock, Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="main-container">
        <div className="content-wrapper">
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto px-4">
              <div className="mb-8 relative">
                <div className="relative inline-block">
                  <FileQuestion className="w-32 h-32 text-purple-500/20 dark:text-purple-400/20 mx-auto" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      404
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                ページが見つかりません
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                お探しのページは存在しないか、移動または削除された可能性があります。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Home className="w-5 h-5" />
                  ホームに戻る
                </Link>
                
                <Link
                  href="/quotes"
                  className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-gray-800 dark:text-white px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-200"
                >
                  <Clock className="w-5 h-5" />
                  名言一覧を見る
                </Link>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl border border-purple-100 dark:border-slate-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  問題が解決しない場合は、
                  <Link
                    href="/contact"
                    className="text-purple-600 dark:text-purple-400 hover:underline font-semibold ml-1"
                  >
                    お問い合わせ
                  </Link>
                  ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
