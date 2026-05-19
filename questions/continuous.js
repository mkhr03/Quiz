const allQuestions = [
  {
    id: 1,
    category: "連続型確率分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\( X \\) は正規分布 \\( \\mathcal{N}(3,4) \\) に従うとする．このとき，確率 \\(\\mathrm{P}(-3\\le X \\le 1)\\) はいくらか．<br>
      ① 0.16<br>
      ② 0.25<br>
      ③ 0.40<br>
      ④ 0.63<br>
      ⑤ 0.88
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "①",
    explanation: `
      正解は①です．<br>
      <解説> <br>
      \\( X \\) の期待値は 3, 分散は 2 より，標準化した\\( Z = \\frac{X-3}{2} \\)は \\( \\mathcal{N}(0,1) \\) に従う. したがって，<br>
      \\begin{align}
      \\mathrm{P}(-3\\le X\\le 1) &= \\mathrm{P}(-3 \\le Z \\le -1) \\\\
        &= \\mathrm{P}(1 \\le Z \\le 3) \\\\
        &= Q(1)-Q(3) \\\\
        &= 0.1587 - 0.0013 \\\\
        &= 0.1574 \\approx 0.16 ,
      \\end{align}
      ただし，\\(Q\\) は標準正規分布の上側確率とする．
      `
  },
  {
    id: 2,
    category: "連続型確率分布",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      1時間に患者が平均5人訪れる病院において，次の患者が訪れるまでの時間をXとし，指数分布に従うとする．<br>
      8分以内に次の患者が訪れる確率はいくらか．以下の表を用いてもよい．<br>
      ① 0.24<br>
      ② 0.39<br>
      ③ 0.49<br>
      ④ 0.55<br>
      ⑤ 0.70
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>\\(x\\)</th>
            <th class='border border-slate-300 p-1'>\\(e^{-x}\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1/3</td>
            <td class='border border-slate-300 p-1'>0.7165</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1/2</td>
            <td class='border border-slate-300 p-1'>0.6065</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2/3</td>
            <td class='border border-slate-300 p-1'>0.5134</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>0.3679</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4/3</td>
            <td class='border border-slate-300 p-1'>0.2636</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3/2</td>
            <td class='border border-slate-300 p-1'>0.2231</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "③",
    explanation: `
      正解は③です．<br>
      <解説> <br>
      \\(X\\) が指数分布 \\(\\mathrm{Exp}(\\lambda)\\) に従うとき，これは単位時間当たりのある事象の平均発生回数 \\(\\lambda\\) に対して，次に事象が発生するまでの待ち時間 \\(X\\) をモデル化するときによく用いられる．このとき，<br>
      \\begin{align}
      \\mathrm{E}[X] &= 1/\\lambda, \\\\
      \\mathrm{Var}[X] &= 1/\\lambda^2, \\\\
      f(x|\\lambda) &= \\lambda e^{-\\lambda x},\\ x\\ge 0,\\\\
      P(X\\ge x) &= 1-e^{-\\lambda x}
      \\end{align}
      が成り立つ．ただし，\\(f(x|\\lambda)\\) は \\(X\\) の確率密度関数．本問題では \\(\\lambda = 5\\) とすればよい．よって，求める確率は
      \\begin{align}
      \\mathrm{P}(X\\le 8/60) &= 1-e^{-5\\times 8/60} \\\\
      &= 1-e^{-4/3} \\\\
      &\\approx 1-0.5134 \\approx 0.49.
      \\end{align}
      `
  },
  {
    id: 3,
    category: "連続型確率分布",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1,X_2\\) は独立にそれぞれ正規分布 \\(\\mathcal{N}(0,1),\\mathcal{N}(0,4)\\) に従うとする．このとき，確率 \\(P(X_1^2+X_2^2/4 \\ge 6)\\) はいくらか．<br>
      ① 0.005<br>
      ② 0.01<br>
      ③ 0.025<br>
      ④ 0.05<br>
      ⑤ 0.1
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "④",
    explanation: `
      正解は④です．<br>
      <解説> <br>
      一般に \\(Z_1,\\dots,Z_n\\) が独立に標準正規分布に従うとき，二乗和 \\(Z_1^2+\\dots+Z_n^2\\) は自由度 n の \\(\\chi^2\\) 分布に従います．<br>
      本問題では \\(X_1,X_2/2\\) が独立に標準正規分布に従うので，二乗和 \\(S = X_1^2+X_2^2/4\\) は
      自由度 2 の \\(\\chi^2\\) 分布に従います．よって，\\(\\chi^2\\) 分布表を用いると，
      \\begin{align}
      P(S\\ge 6) \\approx 0.05
      \\end{align}
      となります．
      `
  },
  {
    id: 4,
    category: "連続型確率分布",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      次のうち，誤っているものを一つ選べ．<br>
      <br>
      ① 確率変数 \\(X,Y\\) は独立に，それぞれ自由度 \\(2,3\\) のカイ二乗分布に従う確率変数とする．このとき，\\(X+Y\\) は自由度 \\(5\\) のカイ二乗分布に従う．<br><br>
      ② 確率変数 \\(X_1,\\cdots,X_n\\) は独立に正規分布 \\(\\mathcal{N}(\\mu,\\sigma^2)\\) に従い，\\(S_n^2\\) は標本分散とする．
      このとき，\\(\\frac{nS_n^2}{\\sigma^2}\\) は自由度 \\(n\\) のカイ二乗分布に従う．<br>
      ただし，\\(S_n^2 = \\frac{1}{n}\\sum_{i=1}^n (X_i-\\bar{X})^2, 
      \\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i\\) とする．<br><br>
      ③ 確率変数 \\(Z,W\\) は独立であり，\\(Z\\) は標準正規分布 \\(\\mathcal{N}(0,1)\\)に, 
      \\(W\\) は自由度 \\(n-1\\) のカイ二乗分布に従うとする．このとき，\\(\\frac{Z}{\\sqrt{W/(n-1)}}\\) は自由度 \\(n-1\\) の t 分布に従う．<br><br>
      ④ 確率変数 \\(X,Y\\) は独立であり，それぞれ自由度 \\(m,n\\) のカイ二乗分布に従うとする．このとき，\\(\\frac{X/m}{Y/n}\\) は自由度 \\((m,n)\\) の F 分布に従う．<br><br>
    `,
    choices: ["①", "②", "③","④"],
    answer: "②",
    explanation: `
      正解は②です．<br>
      <解説> <br>
      ①:これは正しいです．一般に，\\(X,Y\\) が独立で，\\(X\\sim \\chi^2(n),\\ Y\\sim \\chi^2(m)\\) のとき，
        \\(X+Y\\sim\\chi^2(n+m)\\) が成り立ちます．これはカイ二乗分布の再生性とよばれます．<br><br>
      ②:これは誤りです．一般に，\\(X_1,\\dots,X_n\\) は独立に \\(\\mathcal{N}(\\mu,\\sigma^2)\\) に従い，
      \\(S_n^2\\) を標本分散，\\(U_n^2\\) を不偏分散としたとき，
      \\begin{align}
      \\frac{\\sum_{i=1}^{n} (X_i-\\bar{X})^2}{\\sigma^2} = \\frac{nS_n^2}{\\sigma^2}
      = \\frac{(n-1)U_n^2}{\\sigma^2} \\sim \\chi^2(n-1)
      \\end{align}
      が成り立ちます．<br>
      また，標本平均と標本分散 (不偏分散) は独立になります．<br><br> 
      ③:これは正しいです．一般に，\\(Z,W\\) が独立で，\\(Z\\sim \\mathcal{N}(0,1)\\), 
      \\(W\\sim \\chi^2(n)\\) のとき，\\(\\frac{Z}{\\sqrt{W/n}} \\sim t(n)\\) が成り立ちます．③はこの \\(n\\) を \\(n-1\\) に置き換えたものです．<br>
      また，②の解説の設定のもとで，\\(Z = \\sqrt{n}(\\bar{X}-\\mu)/\\sigma\\), \\(W = (n-1)U_n^2/\\sigma^2\\) としたとき，③の仮定を満たし，
      \\begin{align}
      T &= \\frac{\\sqrt{n}(\\bar{X}-\\mu)}{U_n} \\\\
      &= \\frac{Z}{\\sqrt{W/(n-1)}} \\sim t(n-1)
      \\end{align}
      が成り立ちます．この \\(T\\) は標本が分散未知の正規分布に従うときの平均の検定 (t検定) において用いられる検定統計量です．<br><br>
      ④:これは正しいです．これは F 分布の定義です．<br>
      また，③の解説の設定 (一般の議論) において，\\(T = Z/\\sqrt{W/n}\\) とすると，\\(T^2 \\sim F(1,n)\\)が成り立ちます．
      `
  },
];    