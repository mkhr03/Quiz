// basic_stats.js
const allQuestions = [
  {
    id: 1,
    category: "平均・分散",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      あるデータ群 \\(x_1, x_2, \\dots, x_n\\) の平均値を \\(\\bar{x}\\) とするとき、
      各データと平均値の差の2乗の平均である「分散 \\(s^2\\)」を表す正しい式を選べ。
      <br>
      ① \\(\\displaystyle \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})\\) <br>
      ② \\(\\displaystyle \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2\\) <br>
      ③ \\(\\displaystyle \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2}\\)
    `,
    choices: ["①", "②", "③"],
    answer: "②",
    explanation: `
      正解は ② です。<br>
      分散は「データの散らばり」を評価するために、各データの偏差（平均との差）を2乗して平均したものです。<br>
      ①は偏差の合計になりますが、これは常に0になります。③は分散の正の平方根をとった「標準偏差」を表します。
    `
  },
  {
    id: 2,
    category: "標準偏差",
    difficulty: 1,
    priority: 2,
    type: "回答式",
    question: `
      分散が 16 であるデータセットがある。このとき、このデータの「標準偏差」の値を半角数字で答えよ。
    `,
    choices: [],
    answer: "4",
    explanation: `
      標準偏差は分散の正の平方根として定義されます。<br>
      \(\sqrt{16} = 4\) となるため、標準偏差は 4 です。
    `
  },
  {
    id: 3,
    category: "変数の変換",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X\\) の期待値を \\(E[X] = \\mu\\)、分散を \(Var(X) = \sigma^2\) とするとき、
      定数 \(a, b\) を用いて変換した新しい変数 \(Y = aX + b\) の分散 \(Var(Y)\) はどのように表されるか。
    `,
    choices: [
        "\(a \sigma^2 + b\)",
        "\(a^2 \sigma^2\)",
        "\(a \sigma + b\)",
        "\(a^2 \sigma^2 + b^2\)"
    ],
    answer: "\(a^2 \sigma^2\)",
    explanation: `
      正解は \(a^2 \sigma^2\) です。<br>
      分散の性質として、定数を加える操作（\(b\)）は散らばり具合に影響を与えず、
      定数を掛ける操作（\(a\)）は、2乗倍（\(a^2\)）されて分散に影響します。<br>
      数式で示すと \(Var(aX + b) = a^2 Var(X) = a^2 \sigma^2\) となります。
    `
  }
];