# 🐾 DeepSeek API 代理
一个开箱即用的 **DeepSeek API 私用聊天界面**，支持多轮对话、对话记忆、模型切换、思考强度控制、联网搜索（RAG）
 一行命令启动，完全自托管，数据和 API Key 均由你掌控。

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![DeepSeek](https://img.shields.io/badge/DeepSeek-V3%2FR1-blue)

##  主要特性
###  聊天功能
实时显示回复
自动维护对话历史，支持长上下文
新建/删除/切换会话，历史记录持久化存储
支持 DeepSeek‑V3（`deepseek-chat`）与 DeepSeek‑R1（`deepseek-reasoner`）
针对 R1 模型，可调节推理深度（`high` / `max`）

### 用量统计
- 实时显示 **调用次数、Token 消耗、预估费用**（基于 DeepSeek 官方定价）
- 所有数据存入本地 SQLite，无需额外数据库

### 安全与隐私
- **简单登录保护**：每次启动生成随机 Token
- **API Key 前端输入**：不强制写进 `.env`，可在网页中填写，甚至分享给朋友临时使用
  
## 技术
| 层级 | 技术 |
|------|------|
| 后端 | Node.js, Express |
| 数据库 | better‑sqlite3 (SQLite) |
| 前端 | 原生 HTML/CSS/JS, Cropper.js |
| API | DeepSeek Chat API (OpenAI 兼容格式) |
| 搜索 | DuckDuckGo Lite / SearXNG (自托管) |

# 快速开始
### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/项目名.git
cd 项目名
```

### 2. 安装依赖

```bash
npm install
```

### 3.配置环境变量（可选）

```bash
DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
DEEPSEEK_MODEL=deepseek-chat
PORT=3000
你也可以完全不填 API Key，启动后在网页的“设置”面板中输入。
```

### 4.启动服务

```bash
node server.js
```
或者点击run.bat

### 5.开始使用
浏览器打开 http://localhost:3000
输入控制台显示的 Token 登录
在左侧“API & 模型”中输入你的 DeepSeek API Key，点击“测试连接”
选择模型，开始聊天 

# 高级配置

### 思考强度控制

```bash
<select id="reasoningSelect">
  <option value="">关闭</option>
  <option value="low">低</option>
  <option value="high">高</option>
  <option value="max">最大</option>
</select>
```

### 数据存储
所有对话记录、设置、统计均保存在项目根目录的 data.db（SQLite）。你可以在 public/images/ 放置默认头像

# 项目结构

```bash
├── index.js               # 后端主入口（Express + SQLite）
├── web-search.js          # 联网搜索模块（DuckDuckGo / SearXNG）
├── .env.example           # 环境变量模版
├── package.json
├── data.db                # SQLite 数据库（自动生成，已 gitignore）
├── public/
│   ├── index.html         # 完整前端页面（内联 CSS/JS）
│   └── images/            # 默认头像等
└── README.md
```
