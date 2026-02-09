import { defineConfig } from "vitepress";

const installSteps = [
  { text: "01 拆解彩钢瓦遮阳棚", link: "/cn/manuals/step-01" },
  { text: "02 立柱拆解", link: "/cn/manuals/step-02" },
  { text: "03 电池安装", link: "/cn/manuals/step-03" },
  { text: "04 逆变器安装", link: "/cn/manuals/step-04" },
  { text: "05 BOS箱安装", link: "/cn/manuals/step-05" },
  { text: "06 线槽开孔", link: "/cn/manuals/step-06" },
  { text: "07 布线-电池动力线", link: "/cn/manuals/step-07" },
  { text: "08 布线-电池通讯线", link: "/cn/manuals/step-08" },
  { text: "09 布线-电池接地线", link: "/cn/manuals/step-09" },
  { text: "10 布线-逆变器接线-通讯线", link: "/cn/manuals/step-10" },
  { text: "11 布线-逆变器接线-电源线", link: "/cn/manuals/step-11" },
  { text: "12 布线-光伏线", link: "/cn/manuals/step-12" },
  { text: "13 立柱安装", link: "/cn/manuals/step-13" },
  { text: "14 彩钢瓦顶棚安装", link: "/cn/manuals/step-14" },
  { text: "15 遮阳侧边棚安装", link: "/cn/manuals/step-15" },
];

const installStepsEn = [
  { text: "01 Remove Steel Roof Canopy", link: "/manuals/step-01" },
  { text: "02 Remove Columns", link: "/manuals/step-02" },
  { text: "03 Install Batteries", link: "/manuals/step-03" },
  { text: "04 Install Inverters", link: "/manuals/step-04" },
  { text: "05 Install BOS Box", link: "/manuals/step-05" },
  { text: "06 Open Cable Trunking", link: "/manuals/step-06" },
  { text: "07 Wiring - Battery Power Cables", link: "/manuals/step-07" },
  { text: "08 Wiring - Battery Communication Cables", link: "/manuals/step-08" },
  { text: "09 Wiring - Battery Grounding Cables", link: "/manuals/step-09" },
  { text: "10 Wiring - Inverter Comm Cables", link: "/manuals/step-10" },
  { text: "11 Wiring - Inverter Power Cables", link: "/manuals/step-11" },
  { text: "12 Wiring - PV Cables", link: "/manuals/step-12" },
  { text: "13 Install Columns", link: "/manuals/step-13" },
  { text: "14 Install Steel Roof Canopy", link: "/manuals/step-14" },
  { text: "15 Install Side Canopies", link: "/manuals/step-15" },
];

export default defineConfig({
  base: "/",
  cleanUrls: false,
  title: "Integrated Tray Installation Manual",
  description: "Installation and wiring work instruction for integrated tray",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
    },
    cn: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/cn/",
      themeConfig: {
        siteTitle: "一体化托盘安装手册",
        nav: [{ text: "安装步骤", link: "/cn/manuals/step-01" }],
        sidebar: {
          "/cn/manuals/": [
            {
              text: "安装步骤",
              items: installSteps,
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    siteTitle: "Integrated Tray Manual",
    search: {
      provider: "local",
    },
    nav: [{ text: "Installation Steps", link: "/manuals/step-01" }],
    sidebar: {
      "/manuals/": [
        {
          text: "Installation Steps",
          items: installStepsEn,
        },
      ],
    },
  },
});
