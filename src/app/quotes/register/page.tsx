"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addQuote } from "@/utils/quotes";
import Navigation from "@/components/Navigation";
import "../Quotes.module.css";

export default function RegisterQuote() {
  const router = useRouter();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote.trim()) return;

    addQuote(quote, author);
    setMessage("名言を登録しました！");
    setQuote("");
    setAuthor("");

    // 1.5秒後に一覧ページへ遷移
    setTimeout(() => {
      router.push("/quotes");
    }, 1500);
  };

  return (
    <>
      <Navigation />
      <main className="main-container">
        <div className="content-wrapper">
          <header className="header">
            <h1 className="title">
              <span className="title-gradient">名言を登録</span>
            </h1>
            <p className="subtitle">あなたの心に響く言葉を残しましょう</p>
          </header>

          <div className="form-section !p-4 pt-6 max-w-2xl justify-center inline">

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="input-form">
              <div className="form-group">
                <label className="form-label !mt-2" htmlFor="quote">
                  名言の内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="quote"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="ここに名言を入力してください..."
                  className="form-input rounded-xl !pl-2 min-h-[120px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border dark:border-slate-700"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="author">
                  著者 / 出典 (任意)
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="例: スティーブ・ジョブズ"
                  className="form-input !pl-2  rounded-xl min-h-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700"
                />
              </div>

              {message && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-center font-medium">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="submit-button mt-4"
                disabled={!quote.trim()}
              >
                登録する
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
