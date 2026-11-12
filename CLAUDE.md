# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 言語について
- 常に日本語で回答すること
- 作成・編集するドキュメントやREADMEも日本語で書くこと
- コードのコメントも日本語で書くこと（ただし、既存ファイルのコメントが英語で統一されている場合はそれに合わせる）
- コミットメッセージは日本語で書くこと

## 開発コマンド

```bash
npm run dev         # 開発サーバーを起動 (localhost:3000)
npm run build       # 本番用ビルド (静的エクスポートを /out に生成)
npm start           # 本番サーバーを起動
npm run lint        # ESLintを実行
```

## デプロイ

Firebase Hostingは `out/` ディレクトリの静的エクスポートをデプロイするように設定されています:
```bash
npm run build       # 静的エクスポートを生成
firebase deploy     # Firebaseにデプロイ
```

## プロジェクトアーキテクチャ

このプロジェクトは、Firebase Hosting向けに静的エクスポート (`output: "export"`) が設定されたNext.js 15+ App Routerアプリケーションです。主要なアーキテクチャのポイント:

### 静的エクスポートモード
- すべてのページはビルド時に静的生成される
- Next.jsのサーバーサイドランタイム機能（APIルート、ISR、ミドルウェア）は利用不可
- クライアントサイドのデータ管理はlocalStorageのみを使用

### クライアントサイドデータストレージ
ユーザーデータはすべてブラウザのlocalStorageで管理されます:
- `src/utils/quotes.ts` - 名言管理（追加/削除/お気に入り選択）
- `src/utils/bucketList.ts` - バケットリスト項目（追加/削除/完了切り替え）
- ユーザーの生年月日と平均寿命の設定

### 名言ライブラリシステム
名言ライブラリ (`src/data/quoteLibrary.ts`) は優先度ベースのシステムです:
- まずローカルの名言ライブラリから作者名（エイリアスを含む）とタグで検索
- ローカルで見つからない場合はAI生成にフォールバック
- AI呼び出しなしで利用可能にするには、`QUOTE_LIBRARY` 配列に名言を追加

### PWA設定
PWAは `@ducanh2912/next-pwa` を使用して有効化されています:
- ビルド時に `public/` ディレクトリにサービスワーカーが生成される
- 開発モードでは無効化される
- 積極的なキャッシングとオフラインサポートが設定済み

### スタイリング
- Tailwind CSS v4 でユーティリティクラスを使用
- コンポーネント固有のスタイルにはCSS Modulesを使用（例: `QuoteDisplay.module.css`）
- グローバルスタイルは関心事ごとに `src/app/styles/*.css` に分割（forms、navigationなど）
- `next-themes` によるダークモード対応（システム設定に対応）

### 時間計算システム
`src/utils/timeCalculations.ts` のコアユーティリティ:
- `calculateRemainingTime()` - 生年月日と平均寿命に基づくカウントダウンタイマー
- `calculateLifeStats()` - 人生の進捗統計（経過/残り日数、パーセンテージ）
- すべての計算はクライアントサイドでリアルタイム実行
