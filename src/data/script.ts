import { CharacterId } from "../config";

// アニメーションの型定義
export type AnimationType = "none" | "fadeIn" | "slideUp" | "slideLeft" | "zoomIn" | "bounce";

// ビジュアルの型定義
export interface VisualContent {
  type: "image" | "text" | "none";
  src?: string;
  text?: string;
  fontSize?: number;
  color?: string;
  animation?: AnimationType;
}

// 効果音の型定義
export interface SoundEffect {
  src: string;
  volume?: number;
}

// BGM設定
export interface BGMConfig {
  src: string;
  volume?: number;
  loop?: boolean;
}

// BGM設定（動画全体で使用）
export const bgmConfig: BGMConfig | null = null;

// セリフデータの型定義
export interface ScriptLine {
  id: number;
  character: CharacterId;
  text: string;
  displayText?: string;
  scene: number;
  voiceFile: string;
  durationInFrames: number;
  pauseAfter: number;
  emotion?: "normal" | "happy" | "surprised" | "thinking" | "sad";
  visual?: VisualContent;
  se?: SoundEffect;
}

// シーン定義
export interface SceneInfo {
  id: number;
  title: string;
  background: string;
}

export const scenes: SceneInfo[] = [
  { id: 1, title: "オープニング", background: "gradient" },
  { id: 2, title: "メインコンテンツ", background: "solid" },
  { id: 3, title: "エンディング", background: "gradient" },
];

// このファイルは config/script.yaml から自動生成されます
// 編集する場合は config/script.yaml を編集して npm run sync-script を実行してください
export const scriptData: ScriptLine[] = [
  {
    "id": 1,
    "character": "shiino",
    "text": "先輩、こないだニュース見てたら「サースイズデッド、サースは死んだ」っていう記事が目に飛び込んできたんですけど。サースってうちの会社でもたくさん使ってますよね？死んじゃったんですか？",
    "displayText": "先輩、こないだニュース見てたら「SaaS is dead ── SaaSは死んだ」っていう記事が目に飛び込んできたんですけど……。SaaSってうちの会社でもたくさん使ってますよね？ 死んじゃったんですか？",
    "scene": 1,
    "pauseAfter": 8,
    "visual": {
      "type": "text",
      "text": "SaaS is Dead\nってどういうこと？",
      "fontSize": 80,
      "color": "#ffffff",
      "animation": "zoomIn"
    },
    "voiceFile": "01_shiino.wav",
    "durationInFrames": 419
  },
  {
    "id": 2,
    "character": "senpai",
    "text": "はは、いきなり物騒だな。結論から言うと、サースは死んでない。ただ、「今までのサースのやり方のままじゃヤバいよ」っていう警告みたいなもので、かなり大きな話題になってるのは事実だよ。",
    "displayText": "はは、いきなり物騒だな。結論から言うと、SaaSは死んでない。ただ、「今までのSaaSのやり方のままじゃヤバいよ」っていう警告みたいなもので、かなり大きな話題になってるのは事実だよ。",
    "scene": 1,
    "pauseAfter": 8,
    "voiceFile": "02_senpai.wav",
    "durationInFrames": 409
  },
  {
    "id": 3,
    "character": "shiino",
    "text": "よかった。でも、そんな刺激的な言葉が出てきたのには、何か理由があるんですよね？",
    "scene": 1,
    "pauseAfter": 6,
    "voiceFile": "03_shiino.wav",
    "durationInFrames": 204
  },
  {
    "id": 4,
    "character": "senpai",
    "text": "うん。今日はその背景と、サースがこれからどう変わっていくのか、順番に話していこうか。",
    "displayText": "うん。今日はその背景と、SaaSがこれからどう変わっていくのか、順番に話していこうか。",
    "scene": 1,
    "pauseAfter": 10,
    "voiceFile": "04_senpai.wav",
    "durationInFrames": 192
  },
  {
    "id": 5,
    "character": "shiino",
    "text": "そもそも、「サースは死んだ」って誰が言い出したんですか？",
    "displayText": "そもそも、「SaaSは死んだ」って誰が言い出したんですか？",
    "scene": 2,
    "pauseAfter": 6,
    "visual": {
      "type": "text",
      "text": "誰が「SaaS is Dead」\nと言ったのか？",
      "fontSize": 64,
      "color": "#ffffff",
      "animation": "fadeIn"
    },
    "voiceFile": "05_shiino.wav",
    "durationInFrames": 137
  },
  {
    "id": 6,
    "character": "senpai",
    "text": "2024年12月に、マイクロソフトのシーイーオー、サティア・ナデラが、あるポッドキャストで発言したのがきっかけだね。「従来型のサースアプリは、エーアイとクラウドの急速な進化によって近い将来崩壊する、あるいは大きく停止する」って言ったんだ。",
    "displayText": "2024年12月に、MicrosoftのCEOサティア・ナデラが、あるポッドキャストで発言したのがきっかけだね。「従来型のSaaSアプリは、AIとクラウドの急速な進化によって近い将来崩壊する、あるいは大きく停止する」って言ったんだ。",
    "scene": 2,
    "pauseAfter": 8,
    "visual": {
      "type": "text",
      "text": "Microsoft CEO\nサティア・ナデラ\n(2024年12月)",
      "fontSize": 48,
      "color": "#ffeb3b",
      "animation": "fadeIn"
    },
    "voiceFile": "06_senpai.wav",
    "durationInFrames": 552
  },
  {
    "id": 7,
    "character": "shiino",
    "text": "マイクロソフトのシーイーオーがそれを言うって、すごいインパクトですね。だって自分たちもオフィスさんろくごとかサースを提供してるわけですよね？",
    "displayText": "MicrosoftのCEOがそれを言うって、すごいインパクトですね。だって自分たちもOffice 365とかSaaSを提供してるわけですよね？",
    "scene": 2,
    "pauseAfter": 6,
    "voiceFile": "07_shiino.wav",
    "durationInFrames": 288
  },
  {
    "id": 8,
    "character": "senpai",
    "text": "そう、だからこそ衝撃だったんだよ。ただ、ナデラの本当に言いたかったことは、「従来のサースモデルのままでは限界で、テクノロジーの進化に合わせてビジネスモデルを変革すべき時期に来ている」ってことなんだ。サース自体を全否定したわけじゃなくて、「進化しないとマズいぞ」っていうメッセージだね。",
    "displayText": "そう、だからこそ衝撃だったんだよ。ただ、ナデラの本当に言いたかったことは、「従来のSaaSモデルのままでは限界で、テクノロジーの進化に合わせてビジネスモデルを変革すべき時期に来ている」ってことなんだ。SaaS自体を全否定したわけじゃなくて、「進化しないとマズいぞ」っていうメッセージだね。",
    "scene": 2,
    "pauseAfter": 8,
    "voiceFile": "08_senpai.wav",
    "durationInFrames": 616
  },
  {
    "id": 9,
    "character": "shiino",
    "text": "なるほど。「死んだ」って言葉のインパクトに引っ張られがちですけど、要は「変われ」ってことなんですね。",
    "scene": 2,
    "pauseAfter": 6,
    "voiceFile": "09_shiino.wav",
    "durationInFrames": 250
  },
  {
    "id": 10,
    "character": "senpai",
    "text": "その通り。で、この発言をきっかけに業界中で「サースの時代は終わりつつあるのか？」っていう議論が一気に加速したんだ。特に生成エーアイの台頭が、ソフトウェアの使われ方を根本から変える可能性が見えてきたことが大きいね。",
    "displayText": "その通り。で、この発言をきっかけに業界中で「SaaSの時代は終わりつつあるのか？」っていう議論が一気に加速したんだ。特に生成AIの台頭が、ソフトウェアの使われ方を根本から変える可能性が見えてきたことが大きいね。",
    "scene": 2,
    "pauseAfter": 8,
    "visual": {
      "type": "text",
      "text": "生成AIの台頭が\nSaaSの在り方を変える",
      "fontSize": 56,
      "color": "#4fc3f7",
      "animation": "fadeIn"
    },
    "voiceFile": "10_senpai.wav",
    "durationInFrames": 498
  }
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
    text: line.text,
    outputFile: line.voiceFile,
  }));
};
