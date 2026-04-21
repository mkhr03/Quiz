const menuData = [
    {
        id: "desc-stats",
        title: "記述統計",
        description: "データの整理と要約の基礎",
        hasSubMenu: true,
        subItems: [
            { name: "平均・分散・標準偏差", genre: "basic_stats" },
            { name: "相関係数と回帰直線", genre: "correlation" },
        ]
    },
    {
        id: "infer-stats",
        title: "推測統計",
        description: "標本から母集団を推測する",
        hasSubMenu: true,
        subItems: [
            { name: "不偏推定", genre: "unbiased" },
            { name: "仮説検定", genre: "hypothesis_testing" }
        ]
    },
    {
        id: "prob-dist",
        title: "確率分布",
        description: "正規分布、二項分布など",
        hasSubMenu: true,
        subItems: [
            { name: "二項分布", genre: "binomial" },
            { name: "幾何分布", genre: "geo" }
        ]
    }
];