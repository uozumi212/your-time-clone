"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import { exportUserData, importUserData, clearAllData } from "@/utils/dataBackup";
import { Download, Upload, Trash2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleExport = () => {
    try {
      exportUserData();
      setMessage({ type: 'success', text: 'データをエクスポートしました' });
      setTimeout(() => setMessage(null), 3000);
    } catch {
      setMessage({ type: 'error', text: 'エクスポートに失敗しました' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const result = await importUserData(file);
    if (result.success) {
      setMessage({ type: 'success', text: 'データをインポートしました。ページを再読み込みします...' });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      setMessage({ type: 'error', text: result.error || 'インポートに失敗しました' });
      setTimeout(() => setMessage(null), 3000);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClearData = () => {
    const success = clearAllData();
    if (success) {
      setMessage({ type: 'success', text: 'すべてのデータを削除しました。ホームに戻ります...' });
      setTimeout(() => {
        router.push('/');
        window.location.reload();
      }, 1500);
    } else {
      setMessage({ type: 'error', text: 'データの削除に失敗しました' });
      setTimeout(() => setMessage(null), 3000);
    }
    setShowClearConfirm(false);
  };

  return (
    <>
      <Navigation />
      <main className="main-container">
        <div className="content-wrapper">
          <header className="header">
            <h1 className="title">
              <span className="title-gradient">設定</span>
            </h1>
            <p className="subtitle">データのバックアップと管理</p>
          </header>

          <div className="form-section !p-6 max-w-2xl mx-auto">
            
            {message && (
              <div
                className={`p-4 rounded-lg border flex items-center gap-3 mb-6 ${
                  message.type === 'success'
                    ? 'bg-green-500/10 border-green-500/20 text-green-500'
                    : 'bg-red-500/10 border-red-500/20 text-red-500'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span className="font-medium">{message.text}</span>
              </div>
            )}

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  データのバックアップ
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  すべてのデータをJSONファイルとしてダウンロードします。デバイス変更時やデータ保護のために定期的なバックアップをお勧めします。
                </p>
                <button
                  onClick={handleExport}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  データをエクスポート
                </button>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  データの復元
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  以前にエクスポートしたバックアップファイルからデータを復元します。現在のデータは上書きされます。
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                  id="import-file"
                />
                <label htmlFor="import-file">
                  <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer">
                    <Upload className="w-5 h-5" />
                    データをインポート
                  </div>
                </label>
              </section>

              <section className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  データの削除
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  すべてのデータを完全に削除します。この操作は取り消せません。
                </p>
                
                {!showClearConfirm ? (
                  <button
                    onClick={() => setShowClearConfirm(true)}
                    className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-rose-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Trash2 className="w-5 h-5" />
                    すべてのデータを削除
                  </button>
                ) : (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg space-y-3">
                    <p className="text-red-500 font-semibold flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      本当に削除しますか？
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      この操作は取り消せません。すべてのデータが完全に削除されます。
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={handleClearData}
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                      >
                        削除する
                      </button>
                      <button
                        onClick={() => setShowClearConfirm(false)}
                        className="flex-1 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
