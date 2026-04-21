# 統計検定2級 AI共闘学習アプリ

統計検定2級の合格を目指すための、クイズ形式学習アプリケーションです。

## 📂 プロジェクト構造

```text
/ (Root)
├── index.html          # TOP画面（ジャンル選択）
├── quiz.html           # 問題回答画面
├── explanation.html    # 解説一覧画面
├── main.js             # メニュー制御ロジック
├── menu_data.js        # ジャンル・メニュー定義データSSS
├── assets/             # 画像リソース（問題図表など）
│   └── unbiased.png
└── questions/          # 問題データ（JSファイル）
    ├── basic_stats.js  # 平均・分散・標準偏差
    ├── unbiased.js     # 不偏推定
    └── correlation.js  # 相関係数と回帰直線
```
