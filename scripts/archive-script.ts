#!/usr/bin/env npx ts-node

/**
 * スクリプトYAMLアーカイブ & Git自動コミット
 *
 * 使用方法:
 *   npx ts-node scripts/archive-script.ts
 *   npm run archive
 *
 * 動作:
 *   1. config/script.yaml の1行目コメントからタイトルを取得
 *   2. config/scripts/ に日付+タイトル付きでコピーを保存
 *   3. 変更をGitにコミット＆プッシュ
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const ROOT_DIR = process.cwd();
const SCRIPT_PATH = path.join(ROOT_DIR, "config/script.yaml");
const ARCHIVE_DIR = path.join(ROOT_DIR, "config/scripts");

function getTitle(content: string): string {
  // 1行目の # コメントからタイトルを抽出
  const firstLine = content.split("\n")[0];
  const match = firstLine.match(/^#\s*(.+)/);
  if (match) {
    return match[1].trim();
  }
  return "untitled";
}

function sanitizeFilename(title: string): string {
  return title
    .replace(/[\/\\:*?"<>|]/g, "")
    .replace(/\s+/g, "_")
    .substring(0, 80);
}

function getDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const h = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${d}_${h}${min}`;
}

function main() {
  if (!fs.existsSync(SCRIPT_PATH)) {
    console.error("config/script.yaml が見つかりません");
    process.exit(1);
  }

  // アーカイブディレクトリ作成
  if (!fs.existsSync(ARCHIVE_DIR)) {
    fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  }

  const content = fs.readFileSync(SCRIPT_PATH, "utf-8");
  const title = getTitle(content);
  const sanitized = sanitizeFilename(title);
  const dateStr = getDateString();
  const archiveFilename = `${dateStr}_${sanitized}.yaml`;
  const archivePath = path.join(ARCHIVE_DIR, archiveFilename);

  // 同名ファイルがあればスキップ
  if (fs.existsSync(archivePath)) {
    console.log(`⏭  既にアーカイブ済み: ${archiveFilename}`);
    return;
  }

  // コピー保存
  fs.writeFileSync(archivePath, content);
  console.log(`📁 アーカイブ保存: config/scripts/${archiveFilename}`);

  // Git commit & push
  try {
    execSync("git add config/scripts/ config/script.yaml src/data/script.ts public/voices/durations.json", {
      cwd: ROOT_DIR,
      stdio: "pipe",
    });

    const commitMsg = `archive: ${title}`;
    execSync(`git commit -m "${commitMsg}"`, {
      cwd: ROOT_DIR,
      stdio: "pipe",
    });
    console.log(`✅ Git commit: ${commitMsg}`);

    execSync("git push", {
      cwd: ROOT_DIR,
      stdio: "pipe",
      timeout: 30000,
    });
    console.log("🚀 Git push 完了");
  } catch (e: any) {
    if (e.stderr?.toString().includes("nothing to commit")) {
      console.log("ℹ  変更なし、コミットスキップ");
    } else {
      console.error("Git操作でエラー:", e.stderr?.toString() || e.message);
    }
  }
}

main();
