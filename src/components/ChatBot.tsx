import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

interface ChatBotProps {
  lang: Language;
}

export const ChatBot: React.FC<ChatBotProps> = ({ lang }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fa = lang === 'fa';

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          text: fa
            ? 'سلام! من دستیار هوشمند آرشا هستم 🤖 درباره خدمات، مهارت‌ها و نمونه‌کارها ازم بپرس.'
            : 'Hi! I am Arsha\'s AI assistant 🤖 Ask me about services, skills and projects.',
        },
      ]);
    }
  }, [open, messages.length, fa]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setError(null);
    setMessages((prev) => [...prev, { role: 'user', text: content }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, lang }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          fa
            ? 'هنوز هوش مصنوعی پیکربندی نشده. لطفاً بعداً دوباره امتحان کن.'
            : 'AI is not configured yet. Please try again later.'
        );
        setMessages((prev) => prev.slice(0, -1));
        return;
      }

      setMessages((prev) => [...prev, { role: 'bot', text: data.reply }]);
    } catch (e) {
      setError(
        fa
          ? 'خطایی در ارتباط رخ داد. دوباره امتحان کن.'
          : 'A connection error occurred. Please try again.'
      );
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Chat Toggle Button */}
      {!open ? (
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-slate-900 text-white text-sm font-bold shadow-sm shadow-teal-600/25 hover:from-teal-700 hover:to-slate-900 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{fa ? 'سوال از دستیار هوشمند' : 'Ask the AI Assistant'}</span>
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full mt-4"
          >
            <div
              className="rounded-3xl bg-[#EAF2FB] border border-slate-200/80 shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col dark:bg-[#0E2236] dark:border-slate-700/80 dark:shadow-black/20"
              style={{ maxHeight: '420px' }}
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/70 border-b border-slate-200/70 dark:bg-slate-800/70 dark:border-slate-700/70">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-100">
                      {fa ? 'دستیار آرشا' : 'Arsha AI'}
                    </span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                      {fa ? 'برخط' : 'Online'}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700"
                  aria-label={fa ? 'بستن چت' : 'Close chat'}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 px-4 py-3 space-y-2.5 overflow-y-auto"
                style={{ minHeight: '200px', maxHeight: '280px' }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 shrink-0 dark:bg-slate-700 dark:border-slate-600 dark:text-teal-400">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'bg-teal-600 text-white rounded-ee-md'
                          : 'bg-white text-slate-700 border border-slate-200/70 rounded-es-md dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 dark:bg-slate-200 dark:text-slate-900">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 shrink-0 dark:bg-slate-700 dark:border-slate-600 dark:text-teal-400">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="px-3 py-2 rounded-2xl bg-white border border-slate-200/70 text-xs text-slate-500 inline-flex items-center gap-1.5 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      {fa ? 'در حال فکر کردن...' : 'Thinking...'}
                    </div>
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-300">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-2.5 border-t border-slate-200/70 bg-white/70 dark:border-slate-700/70 dark:bg-slate-800/70">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') sendMessage();
                    }}
                    placeholder={fa ? 'پیامت را بنویس...' : 'Type your message...'}
                    className="flex-1 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => sendMessage()}
                    disabled={loading || !input.trim()}
                    className="p-2.5 rounded-2xl bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    aria-label={fa ? 'ارسال' : 'Send'}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
