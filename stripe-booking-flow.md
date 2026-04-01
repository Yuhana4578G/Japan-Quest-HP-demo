# Stripe決済 × ガイド予約 連動設計書

## 基本方針

**完全自動決済** ではなく **「仮予約 → 確認 → 決済」の2ステップ方式** を採用する。

> **理由：** ガイドツアーは日程・人数・エリアで価格が変わる。また40〜60代のアメリカ人ユーザーは、
> 見知らぬ個人ガイドへの即時決済に心理的抵抗がある。まずやり取りで信頼を築いてから決済させる方が予約完結率が高い。

---

## 予約〜決済の全体フロー

```
[ユーザー]                          [ガイド(あなた)]              [Stripe]
    │                                     │                          │
    │  ① 予約フォーム送信                  │                          │
    │──────────────────────────────────>│                          │
    │                                     │                          │
    │  ② 自動確認メール受信                │                          │
    │<──────────────────────────────────│                          │
    │                                     │                          │
    │         ③ ガイドが内容を確認・承認    │                          │
    │                (48時間以内)          │                          │
    │                                     │                          │
    │  ④ 承認メール + 決済リンク受信        │──── Payment Link 発行 ──>│
    │<──────────────────────────────────│                          │
    │                                     │                          │
    │  ⑤ Stripeで決済（デポジットまたは全額）│                          │
    │──────────────────────────────────────────────────────────>│
    │                                     │                          │
    │  ⑥ 決済完了メール受信                │  ⑥' 入金通知受信         │
    │<────────────────────────────────────────────────────────────│
    │                                     │<─────────────────────────│
    │  ⑦ 旅行当日：ガイドと合流             │                          │
```

---

## 各ステップの詳細

### ① 予約フォーム（`/guide-booking`）

ユーザーが入力する項目：

| フィールド | 型 | 必須 |
|---|---|---|
| Full Name | テキスト | ✓ |
| Email Address | メール | ✓ |
| Tour Date（希望日） | 日付 | ✓ |
| Number of Guests | 数値（1〜10） | ✓ |
| Tour Type | セレクト（Half-Day / Full-Day / Multi-Day / Planning Only） | ✓ |
| Interested Areas | チェックボックス（Tokyo / Kyoto / Osaka / Other） | ✓ |
| Special Requests / Message | テキストエリア | |
| How did you find me? | セレクト（YouTube / Google / Friend / Other） | |

フォーム送信後 → 「**リクエスト受付完了**」ページにリダイレクト

---

### ② 自動確認メール（ユーザー宛）

送信タイミング：フォーム送信直後に自動送信

```
Subject: We received your Japan tour inquiry! 🗾

Hi [Name],

Thank you for reaching out! I've received your inquiry for a [Tour Type] 
on [Date] for [N] people.

I'll review your request and get back to you within 48 hours with 
availability and a personalized quote.

In the meantime, feel free to explore more of Japan through my videos:
→ [YouTube Channel Link]

Looking forward to exploring Japan with you!

[Your Name]
Japan Travel Guide
```

---

### ③ ガイドによる承認作業

**Stripe Dashboard** または **メール通知** でリクエスト内容を確認し、
以下を決定する：

- 対応可否（日程・人数の受け入れ可否）
- 最終料金（ゲスト人数・エリア・オプションで計算）
- デポジット額（全額の20〜30%推奨）

---

### ④ 承認メール + Stripe Payment Link

ガイドが **Stripe Dashboard から Payment Link を発行** し、メールに貼り付けて送信する。

```
Subject: Your Japan tour is confirmed — here's your booking link!

Hi [Name],

Great news! I have availability on [Date].

Here are your tour details:
- Tour Type: Full-Day Tour (8 hours)
- Date: [Date]
- Guests: [N] people
- Areas: Tokyo (Shibuya, Asakusa, Shinjuku)
- Total: $[XXX]

To secure your booking, please pay the deposit ($[XX]) via the link below:
→ [Stripe Payment Link]

The remaining balance ($[XX]) will be due 2 weeks before your tour date.

This link expires in 72 hours. Let me know if you have any questions!

[Your Name]
```

---

### ⑤ Stripe決済画面

**Stripe Payment Links** を使う（コード不要・Dashboardから発行可能）

| 設定項目 | 推奨値 |
|---|---|
| 支払い方式 | クレジットカード（Visa / Mastercard / Amex） |
| 通貨 | USD（ドル建て） |
| 金額タイプ | 固定額（リクエストごとに個別リンク発行） |
| 領収書 | 自動送信ON |
| 成功後リダイレクト | サンクスページ（`/booking-confirmed`） |

---

### ⑥ 決済完了後の自動処理

Stripe が自動で行う：
- ユーザーへの領収書メール送信
- ガイド（あなた）への入金通知

ガイドが手動で行う：
- 最終確認メール送信（集合場所・持ち物・当日の連絡先）

---

## Stripe の使い方（技術選択肢）

### オプション A：**Stripe Payment Links**（推奨・最もシンプル）

- **コード不要**
- Stripe Dashboardから数クリックでリンク生成
- メールにURLを貼るだけ
- 初期フェーズはこれで十分

```
Stripe Dashboard
  → Payment Links → Create Link
  → 金額・説明文・リダイレクト先を設定
  → リンクをコピーしてメールに貼る
```

### オプション B：**Stripe Checkout（コード実装）**

- HPの `/guide-booking` ページから直接Stripeの決済画面に遷移
- 即時決済型にしたい場合（固定料金のプランのみ）に適する
- Next.js + Stripe SDKで実装

```
実装イメージ：
[固定プランの "Book Now" ボタン]
  → /api/create-checkout-session（Next.js API Route）
  → Stripe Checkout ページ
  → 決済完了 → /booking-confirmed
```

### オプション C：**Stripe + 予約管理ツール連携**

Calendly / TidyCal などのスケジューリングツールとStripeを連携：
- ユーザーが自分でカレンダーから日程選択
- 即時決済
- ただし柔軟なカスタム対応が難しい

---

## 推奨実装ロードマップ

### Phase 1（今すぐ開始・コード不要）
- Stripeアカウント開設（Business account）
- Payment Links の発行方法を習得
- 予約フォームは **Formspree** または **Tally** で作成
- メール対応は手動

### Phase 2（サイト構築後）
- Next.js でサイト実装
- フォームをサイトに組み込み（送信 → メール通知）
- `/booking-confirmed` サンクスページ作成

### Phase 3（スケールアップ時）
- Stripe Checkout API 実装（固定プランの即時決済）
- 予約管理ダッシュボード（Notion / Airtable連携）
- 自動リマインダーメール（ツアー1週間前・前日）

---

## 料金設計の考え方（参考）

| プラン | 人数 | 料金（USD） | デポジット |
|---|---|---|---|
| Half-Day Tour (4h) | 1〜2名 | $200〜 | $60 |
| Half-Day Tour (4h) | 3〜6名 | $280〜 | $85 |
| Full-Day Tour (8h) | 1〜2名 | $350〜 | $105 |
| Full-Day Tour (8h) | 3〜6名 | $480〜 | $145 |
| Itinerary Planning（オンライン） | − | $80〜 | 全額前払い |

> ※ 価格はあくまでも参考。現地の競合相場と自身のYouTube影響力を考慮して設定。

---

## キャンセルポリシー（例）

| キャンセルタイミング | 返金 |
|---|---|
| 30日以上前 | 全額返金 |
| 15〜29日前 | 50%返金 |
| 7〜14日前 | デポジットのみ没収（残額返金） |
| 7日未満 | 返金なし |

Stripeの **Refund機能** からダッシュボードで手動返金可能。

---

## Stripeアカウント設定チェックリスト

- [ ] Stripe Business アカウント開設
- [ ] 本人確認（KYC）完了
- [ ] 銀行口座（USD受取用）登録
- [ ] ブランド設定（ロゴ・色・サイト名）
- [ ] 自動領収書メールのテンプレート設定
- [ ] テストモードで動作確認
- [ ] 本番モードに切り替え
