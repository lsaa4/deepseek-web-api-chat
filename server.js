const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
if (!DEEPSEEK_API_KEY) {
  console.error('错误：请在 .env 文件中设置 DEEPSEEK_API_KEY');
  process.exit(1);
}

app.post('/api/chat', (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: '无效的消息数组' });
  }

  const requestData = JSON.stringify({
    model: process.env.DEEPSEEK_MODEL || 'deepseek-chat',
    messages: messages,
    stream: true,
  });

  const options = {
    hostname: 'api.deepseek.com',
    port: 443,
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      'Accept': 'text/event-stream',
    },
  };

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no',
  });

  const apiReq = https.request(options, (apiRes) => {
    apiRes.on('data', (chunk) => {
      res.write(chunk);
    });

    apiRes.on('end', () => {
      res.end();
    });
  });

  apiReq.on('error', (error) => {
    console.error('DeepSeek API 请求失败:', error.message);
    res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
    res.end();
  });

  apiReq.write(requestData);
  apiReq.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});