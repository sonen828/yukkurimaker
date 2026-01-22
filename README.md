# Remotion + VOICEVOX 動画テンプレート

ずんだもん＆めたんの掛け合い紹介動画を簡単に作成できるテンプレートです。

**Claude Codeと一緒に使うと、セリフの作成から動画出力まで対話的に進められます。**

## 必要なもの

1. **Node.js 18以上** - [ダウンロード](https://nodejs.org/)
2. **VOICEVOX** - [ダウンロード](https://voicevox.hiroshiba.jp/) (無料の音声合成ソフト)

## セットアップ

```bash
# 1. テンプレートをコピー
cp -r remotion-voicevox-template my-video
cd my-video

# 2. 依存関係をインストール
npm install

# 3. VOICEVOXを起動しておく
```

## 使い方（Claude Codeと一緒に）

### Claude Codeで作業ディレクトリを開く

```bash
cd my-video
claude
```

### Claudeに指示する

```
「〇〇の紹介動画を作りたい」
```

あとはClaudeが：
- セリフを作成
- 音声を生成
- プレビュー確認
- 動画出力

まで案内してくれます。

### よく使う指示

| やりたいこと | 指示の例 |
|-------------|---------|
| 新規作成 | 「〇〇の紹介動画を作って」 |
| セリフ修正 | 「ID 3のセリフを変更して」 |
| 音声生成 | 「音声を生成して」 |
| プレビュー | 「プレビューを見たい」 |
| 動画出力 | 「動画を出力して」 |
| 発音修正 | 「〇〇の発音がおかしい」 |

## 手動で使う場合

### 1. セリフを編集

`src/data/script.ts` を編集してセリフを追加。

### 2. 音声生成

```bash
npm run voices
```

### 3. プレビュー

```bash
npm start
```

http://localhost:3000 でプレビュー確認。

### 4. 動画出力

```bash
npm run build
```

`out/video.mp4` に出力されます。

## キャラクター画像

口パクアニメーション用に画像を配置：

```
public/images/
├── zundamon/
│   ├── mouth_open.png
│   └── mouth_close.png
└── metan/
    ├── mouth_open.png
    └── mouth_close.png
```

画像がない場合はプレースホルダーが表示されます。

## 詳しい使い方

詳細は [CLAUDE.md](./CLAUDE.md) を参照してください。

- Claude Codeでの詳しい使い方
- セリフデータの書き方
- 英語の発音問題の対処法
- シーン管理
- トラブルシューティング
