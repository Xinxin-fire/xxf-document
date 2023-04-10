module.exports = {
  theme: '',
  // title: 'VuePress + Element',
  description: 'VuePress搭建Element的组件库文档教程示例代码',
  base: '/',
  port: '8080',
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "指南", link: "/guide/quick-start" },
      { text: "组件", link: "/main/input" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: {
      "/main/": [
        {
          title: "组件", // 必要的
          path: "input", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["input", "select", "form"],
        },
      ],
      "/guide/": ["quick-start", "version-log"],
      "/": ["" /* / */],
    },
  },
  head: [],
  plugins: [require('./my-plugin.js'), 'demo-container'],
  markdown: {}
};
