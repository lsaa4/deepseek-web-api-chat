# deepseek-web-api-chat
# 🤖 DeepSeek 聊天助手

一个基于 **Node.js + Express** 的全栈聊天应用，前端采用毛玻璃透明 UI，支持与 DeepSeek 最新模型（V4 Pro / Flash）进行流式对话。侧边栏可实时查看调用次数、Token 消耗和费用估算，并支持**本地上传**自定义背景图和助手头像。

---

## ✨ 功能亮点

- 💬 **流式对话**：打字机效果的实时回复体验
- 🧊 **毛玻璃 UI**：透明背景 + 高斯模糊，支持自定义背景图片
- 📊 **控制面板**：实时显示模型名称、调用次数、Token 消耗、估算费用
- 🎨 **个性化设置**：
  - 背景图：支持输入 URL 或**本地上传**
  - 助手头像：支持 URL、本地上传、一键恢复默认
- 🔐 **安全**：API 密钥存放在后端 `.env` 文件中，前端无泄露
- 🚀 **易部署**：一键启动，本地/云端均可运行

---

## 🖼️ 截图

<!-- 可替换为你自己的截图链接 -->
<!-- ![screenshot](https://your-image-url.png) -->

---

## 🛠️ 技术栈

| 类型 | 技术 |
|------|------|
| 后端 | Node.js, Express |
| 前端 | 原生 HTML/CSS/JS |
| 通信 | Server-Sent Events (SSE) 流式传输 |
| API | DeepSeek API (兼容 OpenAI 格式) |

---

## 🚀 快速开始

### 1. 克隆仓库
```bash
git clone https://github.com/lsaa4/deepseek-chat.git
cd deepseek-chat
