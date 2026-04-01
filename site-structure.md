# Japan Quest HP ページ構成設計書

## サイト概要

**チャンネル名：** Japan Quest（@JapanQuest81）
**ブランドコンセプト：** プロの旅行エージェントによる、ファミリー向け日本旅行の完全サポート
**キャッチフレーズ（既存）：** *"Your Japan trip guaranteed: Stop wasting time and money."*

**HPの目的：**
- YouTubeの視聴者を「現地アテンドサービス（local attendant services）」の予約に転換する
- ブログ記事・YouTube動画でSEO集客し、Stripe決済で予約を完結させる

**ターゲット：** アメリカ在住の家族連れ（親世代：40〜60代）

**参考サイト：** [Kensho Quest](https://kenshoquest.com/)

---

## チャンネル実績（社会的証明として使用）

| 指標 | 数値 |
|---|---|
| 登録者数 | 1,650+ subscribers |
| 総再生回数 | 153,000+ views |
| 動画本数 | 27 videos |
| チャンネル開始 | January 2025 |
| Instagram | @japanquest81 |
| TikTok | @japanquest81 |

> 開始から約1年で153K再生は高い拡散力の証明 → Heroセクションで積極的に使う

---

## サイト全体構造

```
/                    ← Home（トップページ）
/about               ← About Us（チームと強みの紹介）
/services            ← Services（現地アテンド・旅行プランニング）
/book                ← Book Now（Stripe決済連動の予約ページ）★
/articles            ← Articles（ブログ記事一覧）
/articles/[slug]     ← 個別記事ページ
/videos              ← Videos（YouTube動画一覧）
/contact             ← Contact（一般問い合わせ）
/booking-confirmed   ← 決済完了後のサンクスページ
```

---

## 各ページ詳細

### 1. Home（トップページ）`/`

**目的：** チャンネルの視聴者を「プロに任せたい」という気持ちにさせ、予約ページへ誘導する。

#### セクション構成

**① Hero Section**
- フルスクリーン動画 or 高品質な日本の写真（家族が楽しんでいるシーン）
- キャッチコピー：*"Your Japan Trip, Guaranteed."*
- サブコピー：*"Japan travel planned and guided by licensed travel agents — so your family can focus on the memories."*
- CTAボタン（大）：`Book Our Local Attendant Service →`
- CTAボタン（小）：`Watch Our YouTube Channel`

**② 実績バー（Trust Strip）**
```
153,000+ Views  |  1,600+ Subscribers  |  Licensed Travel Agents  |  Based in Japan
```

**③ 強み3点（差別化ポイント）**
アイコン＋タイトル＋説明文のカード形式

| アイコン | タイトル | 説明 |
|---|---|---|
| 📋 | Licensed Travel Agents | Unlike influencers, we're certified professionals with real industry knowledge. |
| 🗺️ | Hidden Gems for Families | Off-the-beaten-path spots that families actually love — not just Instagram crowds. |
| 💴 | Cost & Time Optimized | Travel agent-exclusive tips to save money on transport, currency, and more. |

**④ Latest YouTube Videos（最新動画）**
- 最新3〜4本のYouTube埋め込み
- `See All Videos →`

**⑤ Services Overview（サービス紹介）**
- 現地アテンドサービス・旅行プランニングの概要を2〜3枚カードで紹介
- `View All Services & Pricing →`

**⑥ Featured Articles**
- ブログ記事3枚カードグリッド
- カテゴリ：Family Travel / Hidden Gems / Transportation / Food / Planning
- `Read All Articles →`

**⑦ Testimonials（お客様の声）**
- 実際のゲスト・視聴者からの英語レビュー（写真・名前・出身州）

**⑧ Final CTA Banner**
- *"Ready to stop guessing and start your guaranteed Japan trip?"*
- `Book Now →`

---

### 2. About Us `/about`

**目的：** 「プロの旅行エージェントチーム」という信頼性を前面に出す。

#### セクション構成

**① Hero**
- チームの写真（日本の風景の中で）
- *"We're not influencers. We're licensed travel agents who live in Japan."*

**② Our Story**
- チームの経歴・なぜJapan Questを始めたか
- 旅行エージェントとしての専門性・資格

**③ What Makes Us Different**
- 他の旅行チャンネルとの違いを表で比較

| | Japan Quest | 一般旅行チャンネル |
|---|---|---|
| 資格 | Licensed Travel Agents | インフルエンサー |
| 情報の精度 | 常に最新・現地確認済み | 古い情報が混在 |
| サポート | 現地アテンド可能 | 動画のみ |
| 混雑回避 | ローカルの隠れスポット | 人気観光地中心 |

**④ Our Mission**
- *"Eliminate the risk of trip failure and guarantee the most time- and cost-effective travel."*

**⑤ Social Links**
- YouTube: @JapanQuest81
- Instagram: @japanquest81
- TikTok: @japanquest81
- lit.link/japanquest

**⑥ CTA**
- `Book Our Local Attendant Service →`

---

### 3. Services `/services`

**目的：** 提供サービスの全容を伝え、どのプランが自分に合うか判断させる。

#### セクション構成

**① Page Hero**
- *"Professional Japan Travel Services"*
- *"From planning to in-person guidance — we've got your trip covered."*

**② サービス一覧**

**Service 1: Local Attendant Service（現地アテンド）**
> 旅行中に現地スタッフが同行・サポートするフラッグシップサービス

- ✅ 空港出迎え
- ✅ 観光地での案内・通訳
- ✅ レストラン予約・注文サポート
- ✅ 交通手配
- ✅ 緊急時のサポート

**Service 2: Custom Itinerary Planning（旅程プランニング）**
> 来日前にオンラインで旅程を一緒に組み立てるサービス

- ✅ ビデオ通話でのヒアリング
- ✅ 家族構成・興味に合わせたカスタムプラン
- ✅ コスト最適化ルート提案
- ✅ PDFでの旅程書提供

**Service 3: Pre-Trip Consultation（事前相談）**
> 短時間のオンライン相談

- ✅ 45分ビデオ通話
- ✅ 現時点の旅程レビュー
- ✅ Q&A

**③ 料金表**（詳細は予約ページへ）
- `See Pricing & Book →`

**④ FAQ**
- *Do you speak English?*
- *How far in advance should I book?*
- *Can you accommodate kids / elderly / dietary needs?*
- *What areas do you cover?*

---

### 4. Book Now（予約・決済）`/book` ★最重要ページ

> 詳細フロー → [stripe-booking-flow.md](./stripe-booking-flow.md)

**目的：** サービス選択 → 情報入力 → Stripe決済までを一貫して完結させる。

#### セクション構成

**① Page Hero**
- *"Book Your Japan Travel Service"*
- *"Secure your spot — spots fill up fast during peak seasons."*

**② プラン選択（カード形式）**

| プラン | 内容 | 価格（USD） | ボタン |
|---|---|---|---|
| Local Attendant – Half Day | 4時間・1エリア | $200〜 | Select |
| Local Attendant – Full Day | 8時間・複数エリア | $350〜 | Select |
| Custom Itinerary Planning | オンライン旅程作成 | $120〜 | Select |
| Pre-Trip Consultation | 45分ビデオ通話 | $60 | Book Now（即時Stripe決済） |

> Pre-Trip Consultation のみ固定料金なので **Stripe Checkoutで即時決済** 可能。
> それ以外は **仮予約フォーム → 確認メール → Payment Link送付** の2ステップ方式。

**③ 予約フォーム**（プラン選択後に表示）
- Full Name
- Email Address
- Travel Dates（From / To）
- Number of Guests（Adults / Children）
- Tour Type（選択済み）
- Interested Areas（Tokyo / Kyoto / Osaka / Hiroshima / Hokkaido / Other）
- Special Requests
- How did you find us?（YouTube / Google / Instagram / TikTok / Friend / Other）

**④ How It Works**
1. Fill out the form → Auto-confirmation email sent
2. We review & send a custom quote within 48 hours
3. Pay the deposit via Stripe to confirm
4. We'll send full details before your trip
5. Meet us in Japan!

**⑤ Cancellation Policy**（簡潔に）
- 30+ days: Full refund
- 15–29 days: 50% refund
- Under 14 days: No refund

---

### 5. Articles `/articles`

**目的：** SEO流入とYouTube視聴者のリテンション。予約への動線。

**記事カテゴリ（タブフィルター）**
- All / Family Travel / Hidden Gems / Getting Around / Food & Drink / Planning Tips / Budget Tips

**各記事カード**
- サムネイル・カテゴリタグ・タイトル・概要2行・公開日

---

### 6. 個別記事 `/articles/[slug]`

**本文内に必ず入れる要素：**
- 関連YouTube動画の埋め込み（記事ごとに1〜2本）
- 記事末尾CTA：*"Planning a family trip to Japan? Let us handle the details."* → `Book Our Services →`

---

### 7. Videos `/videos`

**目的：** HPでの動画視聴体験を提供し、チャンネル登録と予約を促す。

**動画カテゴリタブ**
- Latest / Family Travel / Hidden Gems / Getting Around / Food / Budget Tips

**各動画カード**
- YouTube埋め込みプレイヤー or サムネイル＋タイトル

**ページ末尾CTA**
- *"Enjoyed these videos? Let us bring Japan to life for your family."*
- `Book a Local Attendant →`

---

### 8. Contact `/contact`

**用途別振り分け：**
- 予約・サービス → `/book` へ誘導
- ビジネス・コラボ → メール
- SNS → 各リンク

---

### 9. Booking Confirmed `/booking-confirmed`

Stripe決済完了後のサンクスページ：

```
Thank you for booking with Japan Quest!

We've received your payment and will send full details 
within 24 hours to [email].

In the meantime, explore more Japan tips:
→ [Watch Our Latest Videos]
→ [Read Our Travel Guides]
```

---

## ナビゲーション設計

### Header
```
[Japan Quest ロゴ]   Home   About   Services   Articles   Videos   [Book Now ボタン]
```
- `Book Now` はオレンジや赤系の目立つボタン（緊急性・行動喚起）
- モバイル：ハンバーガーメニュー

### Footer
```
[Japan Quest]
Licensed Travel Agents based in Japan

[YouTube] [Instagram] [TikTok]

Navigation: Home / About / Services / Book Now / Articles / Videos / Contact
Legal: Privacy Policy / Terms of Service / Cancellation Policy

© 2025 Japan Quest. All rights reserved.
```

---

## デザイン方針

| 要素 | 方針 |
|---|---|
| カラーパレット | 紺（信頼・プロ感）× 白 × アクセントに赤または金（和風モダン） |
| フォント | 英語向けの読みやすいSans-serif（Inter / Plus Jakarta Sans） |
| 写真トーン | 明るく・家族が楽しんでいる・本物の日本らしさ |
| トーン | Professional yet warm（プロだが親しみやすい） |
| モバイル対応 | 必須（40〜60代 + ファミリー層はスマホが多い） |

---

## プラットフォーム選定

**Claude Code が開発・更新を担当するため、Next.js を採用する。**

WordPress / Squarespace はノーコード運用のためのトレードオフ（制約・プラグイン管理・速度低下）を抱えている。Claude Code が実装を行う場合、これらの制約を受けるメリットがなく、Next.js で最高のパフォーマンス・SEO・拡張性を得られる。

| 観点 | Next.js が優れる理由 |
|---|---|
| SEO | サーバーサイドレンダリング・メタデータ制御が完全に自由 |
| 表示速度 | 静的生成（SSG）＋ISRで世界最速クラス |
| Stripe連携 | API Routesで直接実装。プラグイン不要 |
| ブログ | MDX または Notion / Contentful を CMS として使用 |
| 拡張性 | 将来の機能追加（多言語・予約管理など）に制限なし |
| コスト | Vercel 無料枠で十分。月額$0〜20 |

---

## 技術スタック

| カテゴリ | 推奨 | 理由 |
|---|---|---|
| フレームワーク | Next.js (App Router) | SEO / ISR / API Routes が揃っている |
| スタイル | Tailwind CSS | 高速実装・レスポンシブ対応 |
| CMS | Notion API または Contentful | 記事の追加・更新をコードなしで実施可能 |
| フォーム | React Hook Form + メール送信（Resend） | 予約フォームのバリデーション＋自動メール |
| 決済 | Stripe Payment Links（初期）→ Stripe Checkout API | 段階導入で早期ローンチ可能 |
| 動画 | YouTube IFrame API / YouTube Data API v3 | 最新動画の自動取得 |
| ホスティング | Vercel | Next.js との相性◎・無料枠あり |
| 解析 | Google Analytics 4 | 流入元・予約率の計測 |

---

## 優先実装順序

1. **Home** — ブランド第一印象・CTAの導線確立
2. **Book Now + Stripe** — 収益化の核心（早期ローンチ優先）
3. **Services** — サービス詳細の説明
4. **About** — チームの信頼構築
5. **Articles（一覧＋個別）** — SEO・長期的集客
6. **Videos** — YouTube連携
7. **Contact** — 補完的窓口
