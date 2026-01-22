# Remotion + VOICEVOX 動画テンプレート

ずんだもん＆めたんの掛け合い紹介動画を作成するためのテンプレートです。

## 必要なもの

1. **Node.js 18以上** - https://nodejs.org/
2. **VOICEVOX** - https://voicevox.hiroshiba.jp/ (無料の音声合成ソフト)
3. **Claude Code** - このテンプレートと一緒に使うと便利

## クイックスタート

### 1. テンプレートをコピー

```bash
cp -r remotion-voicevox-template my-video
cd my-video
npm install
```

### 2. キャラクター画像を配置

`public/images/` に画像を配置：

```
public/images/
├── zundamon/
│   ├── mouth_open.png   # 口開き
│   └── mouth_close.png  # 口閉じ
└── metan/
    ├── mouth_open.png
    └── mouth_close.png
```

画像がない場合はプレースホルダー（絵文字）が表示されます。

### 3. VOICEVOXを起動

VOICEVOXアプリを起動しておいてください（バックグラウンドで動いていればOK）。

---

## Claude Codeでの使い方

このテンプレートはClaude Codeと一緒に使うと、セリフの作成から動画出力まで簡単にできます。

### 基本的な流れ

```
1. Claude Codeでプロジェクトを開く
2. 作りたい動画の内容を伝える
3. セリフを生成してもらう
4. 音声を生成
5. プレビューで確認
6. 動画を出力
```

### Claude Codeへの指示例

#### 新しい動画を作りたい時

```
「〇〇の紹介動画を作りたい。ずんだもんとめたんの掛け合いで」
```

```
「Pythonの基礎を説明する動画のスクリプトを書いて」
```

```
「このアプリの使い方を紹介する動画を作って。特徴は〜〜で、対象者は初心者」
```

#### セリフを修正したい時

```
「シーン2のセリフをもっとわかりやすくして」
```

```
「ID 5のセリフを『〇〇〇』に変更して」
```

```
「めたんのセリフをもっと増やして」
```

#### 音声と動画の生成

```
「音声を生成して」
→ VOICEVOXで全セリフの音声ファイルが生成されます
```

```
「プレビューを見たい」
→ npm start が実行され、ブラウザで確認できます
```

```
「動画を出力して」
→ npm run build が実行され、out/video.mp4 に出力されます
```

#### 問題があった時

```
「音声と字幕がずれてる」
→ durationInFrames を修正してくれます
```

```
「〇〇の発音がおかしい」
→ カタカナ表記に変更し、displayTextで正しい表記を設定してくれます
```

### 実際のワークフロー例

**例：「Homebrewの使い方」動画を作る場合**

```
あなた: 「Homebrewの使い方を紹介する動画を作りたい。
        macOSでのパッケージ管理について、初心者向けに説明して」

Claude: スクリプトを作成します...
        [script.ts を編集]

        音声を生成しますか？

あなた: 「はい」

Claude: [VOICEVOXで音声生成]
        音声生成が完了しました。プレビューで確認しますか？

あなた: 「確認する」

Claude: [npm start を実行]
        http://localhost:3000 で確認できます。

あなた: 「ID 3のセリフ、Homebrewの発音がおかしい」

Claude: VOICEVOXは英語をうまく発音できないので、
        カタカナに変更します。
        [text を「ホームブルー」に、displayText を「Homebrew」に設定]
        音声を再生成しますか？

あなた: 「はい、あと動画出力もして」

Claude: [音声再生成]
        [npm run build を実行]
        out/video.mp4 に出力しました。
```

---

## ファイル構成

```
├── src/
│   ├── data/
│   │   └── script.ts        # ★ セリフデータ（主にここを編集）
│   ├── components/
│   │   ├── Character.tsx    # キャラクター表示
│   │   ├── Subtitle.tsx     # 字幕
│   │   └── SceneVisuals.tsx # シーン別ビジュアル
│   ├── config.ts            # 動画設定
│   ├── Main.tsx             # メインコンポーネント
│   └── Root.tsx             # Remotionルート
├── public/
│   ├── images/              # キャラクター画像
│   │   ├── zundamon/
│   │   └── metan/
│   └── voices/              # 音声ファイル（自動生成）
├── scripts/
│   └── generate-voices.ts   # 音声生成スクリプト
└── out/
    └── video.mp4            # 出力動画
```

---

## セリフデータの書き方

`src/data/script.ts` を編集します：

```typescript
export const scriptData: ScriptLine[] = [
  {
    id: 1,                              // ユニークなID
    character: "zundamon",              // "zundamon" or "metan"
    text: "こんにちは！",                // セリフ（音声生成用）
    scene: 1,                           // シーン番号
    voiceFile: "01_zundamon.wav",       // 音声ファイル名
    durationInFrames: 100,              // 長さ（音声生成後に自動更新）
    pauseAfter: 10,                     // セリフ後の間
    emotion: "happy",                   // 感情（オプション）
  },
  // ...
];
```

### 英語を含むセリフ

VOICEVOXは英語をうまく発音できません。`displayText` を使って対応します：

```typescript
{
  id: 3,
  character: "zundamon",
  text: "ホームブルーでインストールするのだ！",      // 音声用（カタカナ）
  displayText: "Homebrewでインストールするのだ！", // 字幕用（英語）
  // ...
}
```

よく使う変換例：
- `macOS` → `マックオーエス`
- `iPhone` → `アイフォン`
- `GitHub` → `ギットハブ`
- `API` → `エーピーアイ`
- `AI` → `エーアイ`

---

## キャラクター設定

| ID | 名前 | VOICEVOX Speaker ID | 画面位置 |
|----|------|---------------------|----------|
| metan | 四国めたん | 2 | 左下 |
| zundamon | ずんだもん | 3 | 右下 |

### 画像の配置

口パクアニメーション用に2種類の画像が必要：

```
public/images/zundamon/
├── mouth_open.png   # 口開き
└── mouth_close.png  # 口閉じ

public/images/metan/
├── mouth_open.png   # 口開き
└── mouth_close.png  # 口閉じ
```

画像ファイル名は `src/config.ts` で変更可能です。

---

## シーン管理

シーンは `src/data/script.ts` で定義：

```typescript
export const scenes: SceneInfo[] = [
  { id: 1, title: "オープニング", background: "gradient" },
  { id: 2, title: "メインコンテンツ", background: "solid" },
  { id: 3, title: "エンディング", background: "gradient" },
];
```

シーンごとのビジュアルは `src/components/SceneVisuals.tsx` でカスタマイズできます。

---

## コマンド一覧

```bash
# プレビュー（開発サーバー起動）
npm start

# 音声生成（VOICEVOXが起動している必要あり）
npm run voices

# 動画出力
npm run build
```

---

## 技術仕様

- **解像度**: 1920x1080 (Full HD)
- **フレームレート**: 30fps
- **再生速度**: 1.2倍速（`config.ts` で変更可能）
- **durationInFrames計算**: `秒数 × 30fps × 1.2playbackRate`

---

## トラブルシューティング

### 「VOICEVOXに接続できない」
→ VOICEVOXアプリが起動しているか確認してください

### 「音声と字幕がずれる」
→ `npm run voices` を実行すると `durationInFrames` が自動修正されます

### 「英語の発音がおかしい」
→ `text` をカタカナに、`displayText` に英語表記を設定してください

### 「キャラクター画像が表示されない」
→ `public/images/{character}/` に画像があるか確認してください
→ 画像がない場合はプレースホルダーが表示されます

### 「動画出力が遅い」
→ Remotionの仕様です。長い動画ほど時間がかかります
