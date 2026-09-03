import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;
const apiKey = process.env.GEMINI_API_KEY || '';

let ai = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  if (!apiKey) {
    return res.status(503).json({
      error: 'GEMINI_API_KEY is not configured. Add it to the .env file to enable the AI chat bot.',
    });
  }

  const { message, lang } = req.body || {};
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const systemPrompt =
    lang === 'fa'
      ? `تو دستیار هوشمند سایت شخصی «آرشا گودرزی» هستی، طراح و توسعه‌دهنده وب.
پاسخ‌ها را به زبان فارسی و کوتاه و دوستانه بده (حداکثر ۴-۵ جمله).
درباره این خدمات بگو: طراحی وب‌سایت اختصاصی، فروشگاه اینترنتی، وب‌اپلیکیشن، بهبود UI/UX و سئو.
اگر درباره قیمت یا پروژه پرسیدند، بگو برای دریافت مشاوره رایگان از طریق بخش تماس (فرم پایین صفحه) پیام بدهند.
اگر درباره مهارت‌ها پرسیدند: React, Next.js, TypeScript, Tailwind CSS, Node.js, Figma, Supabase.
اگر درباره نمونه‌کار پرسیدند، به پروژه «خودرو بین» (پلتفرم هوشمند مقایسه و کشف خودرو) اشاره کن.
هرگز اطلاعات جعلی نده و اگر نمی‌دانی، صادقانه بگو.`
      : `You are the friendly AI assistant for "Arsha Goudarzi", a web designer & developer portfolio site.
Keep answers concise, friendly and in English (max 4-5 sentences).
Talk about these services: custom website design, e-commerce, web apps, UI/UX improvements and SEO.
If asked about pricing or a project, invite them to send a message via the contact form (bottom of the page) for a free consultation.
If asked about skills: React, Next.js, TypeScript, Tailwind CSS, Node.js, Figma, Supabase.
If asked about portfolio, mention the "KhodroBin" project (smart car discovery & comparison platform).
Never make up facts; if unsure, say so honestly.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ role: 'user', parts: [{ text: systemPrompt + '\n\nکاربر: ' + message }] }],
    });

    const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return res.status(502).json({ error: 'The AI returned an empty response. Please try again.' });
    }
    return res.json({ reply: text.trim() });
  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(500).json({ error: 'Something went wrong talking to the AI. Please try again.' });
  }
});

// Serve built frontend in production
const dist = path.join(__dirname, 'dist');
if (process.env.NODE_ENV === 'production' || !process.env.VITE_DEV_SERVER) {
  app.use(express.static(dist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(dist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Arsha server listening on http://localhost:${PORT}`);
});
