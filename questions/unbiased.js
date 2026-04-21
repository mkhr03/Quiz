// questions.js
const allQuestions = [
  {
    id: 1,
    category: "不偏推定",
    difficulty: 2,
    priority: 1,
    type: "選択式",
    question: `
      以下の図は横軸にサンプルサイズ、縦軸に推定量の実現値を示した図である。<br>
      以下の図において、推定量が不偏推定量を示していると考えられる番号の組み合わせとして正しいものを選択せよ。<br>
      ![推定量の比較](picture/unbiased.png)
    `,
    choices: ["1 と 2", "1 と 4", "2 と 3", "3 と 4"],
    answer: "1 と 4",
    explanation: `
      図中の点線は母集団の真値を表しています。
      グラフ1（標本平均）とグラフ4（不偏分散）は、サンプルサイズ \\(n\\) が小さい段階から期待値が真値と一致しており、不偏性を満たしています。<br>
      一方で、グラフ2とグラフ3（標本分散）は、サンプルサイズが小さい時に真値を下回るバイアスが見られるため、不偏推定量ではありません。
    `
  },
  {
    id: 2,
    category: "不偏推定",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1, X_2\\) は独立に平均 \\(\\mu\\)、分散 \\(\\sigma^2\\) の分布に従うとする。<br>
      次の推定量のうち、\\(\\mu\\) の不偏推定量であって、分散が最小である推定量を選べ。<br>
      ① \\(\\frac{1}{3}X_1 + \\frac{2}{3}X_2\\)<br>
      ② \\(\\frac{1}{4}X_1 + \\frac{3}{4}X_2\\)<br>
      ③ \\(\\frac{1}{2}X_1 + \\frac{1}{2}X_2\\)<br>
      ④ \\(X_1\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      【解説】<br>
      まず、与えられた選択肢はすべて係数の和が1（\\(w_1 + w_2 = 1\\)）であるため、すべて \\(\\mu\\) の不偏推定量です。<br><br>
      不偏推定量 \\(w_1 X_1 + w_2 X_2\\) の分散は、独立性より次のように計算できます：<br>
      \\(Var(w_1 X_1 + w_2 X_2) = w_1^2 \\sigma^2 + w_2^2 \\sigma^2 = (w_1^2 + w_2^2) \\sigma^2\\)<br><br>
      この \\(w_1^2 + w_2^2\\) を、\\(w_1 + w_2 = 1\\) という制約の下で最小にするのは \\(w_1 = w_2 = 1/2\\) のときです。<br>
      したがって、標本平均である ③ が最も分散が小さくなります（最良不偏推定量）。 `
  },
  {
    id: 3,
    category: "不偏推定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1, \\dots, X_n\\) は独立に平均 \\(\\mu\\) の分布に従うとする。<br>
      次の ①, ②, ③, ④ のうち、\\(\\mu\\) の不偏推定量として正しいものをすべて選べ。<br>
      ① \\(\\displaystyle \\frac{1}{n} \\sum_{i=1}^{n} X_i\\)<br>
      ② \\(\\displaystyle \\sum_{i=1}^{n} X_i\\)<br>
      ③ \\(\\displaystyle \\frac{2}{n(n+1)} \\sum_{i=1}^{n} i X_i\\)<br>
      ④ \\(X_1\\)
    `,
    choices: ["1. ①", "2. ②, ④", "3. ①, ③, ④", "4. ①, ④"],
    answer: "3. ①, ③, ④",
    explanation: `
      期待値が \\(\\mu\\) に一致するものを探します。<br>
      ① 標本平均の期待値は \\(E[\\bar{X}] = \\mu\\) であり不偏推定量です。<br>
      ② 期待値は \\(n\\mu\\) となり、不偏ではありません。<br>
      ③ 重み付き平均の一種です。\\(E[\\sum_{i=1}^{n} i X_i] = \\mu \\sum_{i=1}^{n} i = \\mu \\frac{n(n+1)}{2}\\) となるため、係数を掛けたこの式も期待値は \\(\\mu\\) となり、不偏推定量です。<br>
      ④ 第1標本のみでも、その期待値は分布の平均 \\(\\mu\\) に一致するため、不偏推定量です。
    `
  },
  {
    id: 4,
    category: "不偏推定",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1, \\dots, X_n\\) は独立に平均 \\(\\mu\\)、分散 \\(\\sigma^2\\) の分布に従うとする。
      このとき、標本平均を \\(\\bar{X}\\) として、不偏分散 \\(S^2 = \\frac{1}{n-1} \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2\\) が \\(\\sigma^2\\) の不偏推定量であることを証明する。<br>
      次の ① 〜 ③ に入る式の組み合わせとして適切なものはどれか。<br><br>
      
      【証明の過程】<br>
      \\begin{align}
      \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2 &= \\displaystyle\\sum_{i=1}^n \\{(X_i - \\mu) - (\\bar{X} - \\mu)\\}^2 \\\\
      &= \\displaystyle\\sum_{i=1}^n \\left[ (X_i - \\mu)^2 - 2(X_i - \\mu)(\\bar{X} - \\mu) + (\\bar{X} - \\mu)^2 \\right] \\\\
      &= \\displaystyle\\sum_{i=1}^n (X_i - \\mu)^2 \\\\
       &\\qquad - 2(\\bar{X} - \\mu) \\displaystyle\\sum_{i=1}^n (X_i - \\mu) + \\displaystyle\\sum_{i=1}^n (\\bar{X} - \\mu)^2
      \\end{align}
      ここで、
      \\begin{equation} \\displaystyle\\sum_{i=1}^n (X_i - \\mu)(\\bar{X} - \\mu) = \\text{①} \\end{equation}
      であることと、
      \\begin{equation}
        Var(\\bar{X}) = E[(\\bar{X} - \\mu)^2] = \\text{②}
      \\end{equation} 
      より、
      \\begin{equation}
        E\\left[ \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2 \\right] = n Var(X_i) - n Var(\\bar{X}) = \\text{③}
      \\end{equation}
      したがって、
      \\begin{equation}
        E[S^2] = E\\left[ \\frac{1}{n-1} \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2 \\right] = \\sigma^2
      \\end{equation}  
      
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>①</th>
            <th class='border border-slate-300 p-1'>②</th>
            <th class='border border-slate-300 p-1'>③</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\sigma^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(n\\sigma^2\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\sigma^2}{n}\\)</td>
            <td class='border border-slate-300 p-1'>\\((n-1)\\sigma^2\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>\\(n\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\sigma^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(n\\sigma^2\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>\\(n\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\sigma^2}{n}\\)</td>
            <td class='border border-slate-300 p-1'>\\((n-1)\\sigma^2\\)</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "2",
    explanation: `
      【解説】<br>
      ①：\\(\\sum_{i=1}^n (X_i - \\mu) = n(\\bar{X} - \\mu)\\) となるため、展開すると \\(n(\\bar{X} - \\mu)^2\\) となります。これは項数で書き換えると \\(\\sum_{i=1}^n (\\bar{X} - \\mu)^2\\) と等価です。<br>
      ②：標本平均の分散は元の分散の \\(1/n\\) になるため、\\(Var(\\bar{X}) = \\frac{\\sigma^2}{n}\\) です。<br>
      ③：\\(E[\\sum (X_i - \\mu)^2] = n\\sigma^2\\) および \\(E[n(\\bar{X} - \\mu)^2] = n \\cdot \\frac{\\sigma^2}{n} = \\sigma^2\\) なので、それらの差は \\((n-1)\\sigma^2\\) となります。
    `
  }
];