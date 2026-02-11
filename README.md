# integrated-skid-docs

## 项目简介
这是“一体化托盘安装手册”及相关图片素材的文档仓库，主要用于维护装配/拆解流程说明与配套示意图。

## 目录结构
- `docs/index.md`：站点首页（中文）
- `docs/cn/index.md`：中文首页
- `docs/cn/manuals/step-*.md`：15个安装步骤模块
- `docs/manuals/step-*.md`：English installation steps (15 pages)
- `docs/work-instruction-integrated-skid.md`：原始作业指导书正文（拆分来源）
- `docs/images/CN/`：中文图片资源，按工序编号分目录
- `docs/images/EN/`：英文图片资源，按工序编号分目录
- `docs/.vitepress/config.mts`：VitePress 路由与导航配置

## 图片引用规则
在中文安装步骤中，图号 `图X-Y` 对应图片路径：
- `docs/images/CN/X/Y.png`

示例：
- `图1-1` -> `docs/images/CN/1/1.png`

## 使用说明
运行文档站点：
- `pnpm install`
- `pnpm docs:dev`
