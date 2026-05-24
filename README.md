#  DeepSeek API 代理

一个开箱即用的 **DeepSeek API 私用聊天界面**，支持多轮对话、对话记忆、模型切换、思考强度控制、联网搜索（RAG）  

 一行命令启动，完全自托管，数据和 API Key 均由你掌控。

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![DeepSeek](https://img.shields.io/badge/DeepSeek-V3%2FR1-blue)

---

##  主要特性

###  聊天功能
- 流式对话（SSE），实时显示回复
- 自动维护对话历史，支持长上下文
- 新建/删除/切换会话，历史记录持久化存储
- 支持 DeepSeek‑V3（`deepseek-chat`）与 DeepSeek‑R1（`deepseek-reasoner`）
- 针对 R1 模型，可调节推理深度（`high` / `max`）

###  用量统计
- 实时显示调用次数、Token 消耗、预估费用（基于 DeepSeek 官方定价）
- 所有数据存入本地 SQLite，无需额外数据库

###  安全与隐私
- 每次启动生成随机 Token，防止他人滥用
- 不强制写进 `.env`，可选择在网页中填写
- 默认仅监听 `127.0.0.1`，避免公网暴露

---

## 🛠 技术

| 层级 | 技术 |
|------|------|
| 后端 | Node.js, Express |
| 数据库 | better‑sqlite3 (SQLite) |
| 前端 | 原生 HTML/CSS/JS, Cropper.js |
| API | DeepSeek Chat API (OpenAI 兼容格式) |
| 搜索 | DuckDuckGo Lite / SearXNG (自托管) |

---

##  快速开始

### 环境要求
- **Node.js** >= 18
- **npm** 或 yarn
- 一个 DeepSeek API Key（[获取地址](https://platform.deepseek.com/api_keys)）

---

### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/项目名.git
cd 项目名

npm install
