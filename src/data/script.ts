import { CharacterId } from "../config";

// セリフデータの型定義
export interface ScriptLine {
  id: number;
  character: CharacterId;
  text: string; // 音声生成用（カタカナ可）
  displayText?: string; // 字幕表示用（英語表記など）。なければtextを使用
  scene: number;
  voiceFile: string;
  durationInFrames: number; // fps * playbackRate基準
  pauseAfter: number; // セリフ後の間（フレーム数）
  emotion?: "normal" | "happy" | "surprised" | "thinking" | "sad";
}

// シーン定義
export interface SceneInfo {
  id: number;
  title: string;
  background: string;
}

// サンプルシーン定義
export const scenes: SceneInfo[] = [
  { id: 1, title: "オープニング", background: "gradient" },
  { id: 2, title: "メインコンテンツ", background: "solid" },
  { id: 3, title: "エンディング", background: "gradient" },
];

// サンプルスクリプトデータ
// 実際の使用時はセリフを編集してから npm run voices で音声生成
export const scriptData: ScriptLine[] = [
  {
    id: 1,
    character: "zundamon",
    text: "こんにちは！今日は〇〇を紹介するのだ！",
    scene: 1,
    voiceFile: "01_zundamon.wav",
    durationInFrames: 100, // 音声生成後に更新
    pauseAfter: 10,
    emotion: "happy",
  },
  {
    id: 2,
    character: "metan",
    text: "楽しみね。詳しく教えて？",
    scene: 1,
    voiceFile: "02_metan.wav",
    durationInFrames: 80,
    pauseAfter: 10,
    emotion: "normal",
  },
  // 英語を含むセリフの例（VOICEVOXはカタカナで発音、字幕は英語表記）
  // {
  //   id: 3,
  //   character: "zundamon",
  //   text: "ホームブルーでインストールできるのだ！",
  //   displayText: "Homebrewでインストールできるのだ！",
  //   scene: 2,
  //   voiceFile: "03_zundamon.wav",
  //   durationInFrames: 100,
  //   pauseAfter: 10,
  //   emotion: "normal",
  // },
];

// VOICEVOXスクリプト生成用
export const generateVoicevoxScript = (
  data: ScriptLine[],
  characterSpeakerMap: Record<CharacterId, number>
) => {
  return data.map((line) => ({
    id: line.id,
    character: line.character,
    speakerId: characterSpeakerMap[line.character],
    text: line.text, // 音声生成はtextを使用
    outputFile: line.voiceFile,
  }));
};
