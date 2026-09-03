import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MascotProps {
  lang: Language;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Mascot: React.FC<MascotProps> = ({ lang, className = '', size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWinking, setIsWinking] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const [showTip, setShowTip] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const t = translations[lang].mascot;

  // Auto blink every few seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsWinking(true);
      setTimeout(() => setIsWinking(false), 260);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  // Handle click on mascot
  const handleMascotClick = (e: React.MouseEvent) => {
    setClickCount((prev) => prev + 1);
    setTipIndex((prev) => (prev + 1) % t.tips.length);
    setShowTip(true);

    // Fire cute pastel confetti around the mascot
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 28,
      spread: 60,
      origin: { x, y },
      colors: ['#818CF8', '#F472B6', '#FBBF24', '#34D399', '#A78BFA'],
      ticks: 150,
      disableForReducedMotion: true,
    });
  };

  const currentTip = t.tips[tipIndex];

  return (
    <div
      id="hero-mascot-container"
      className={`relative inline-flex flex-col items-center select-none ${className}`}
    >
      {/* Interactive Speech Bubble */}
      <AnimatePresence mode="wait">
        {showTip && (
          <motion.div
            key={tipIndex}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className={`mb-3 relative px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-indigo-100 shadow-sm shadow-indigo-100/50 max-w-[260px] sm:max-w-[300px] text-center z-10 cursor-pointer group`}
            onClick={() => setTipIndex((prev) => (prev + 1) % t.tips.length)}
            title={lang === 'fa' ? 'برای تغییر پیام کلیک کنید' : 'Click to see another tip'}
          >
            <div className="flex items-center justify-center gap-1.5 text-xs text-indigo-950 font-medium leading-relaxed">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 animate-pulse" />
              <span>{currentTip}</span>
            </div>
            
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-indigo-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Mascot Body */}
      <motion.div
        id="mascot-character"
        className="relative cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleMascotClick}
        aria-label={lang === 'fa' ? 'آرشا بات، راهنمای تعاملی سایت' : 'Sparky, interactive portfolio mascot'}
      >
        {/* Soft Ambient Glow under character */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-indigo-500/15 rounded-full blur-md" />

        {/* Mascot SVG */}
        <svg
          width={size === 'sm' ? 120 : size === 'lg' ? 180 : 150}
          height={size === 'sm' ? 130 : size === 'lg' ? 195 : 160}
          viewBox="0 0 160 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-transform duration-300"
        >
          {/* Antenna with bouncy star/heart */}
          <g>
            <path
              d="M80 48 V22"
              stroke="#6366F1"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Antenna Top Orb / Heart */}
            <circle
              cx="80"
              cy="18"
              r="9"
              fill={isHovered ? '#EC4899' : '#F59E0B'}
              className="transition-colors duration-300"
            />
            <circle cx="78" cy="15" r="3" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* Head & Body (Cute Rounded Modern Robot / Capsule shape) */}
          <rect
            x="32"
            y="42"
            width="96"
            height="90"
            rx="34"
            fill="url(#mascotGrad)"
            stroke="#4F46E5"
            strokeWidth="3.5"
          />

          {/* Ears / Side Antennas / Audio Cans */}
          <rect
            x="24"
            y="70"
            width="9"
            height="26"
            rx="4.5"
            fill="#818CF8"
            stroke="#4F46E5"
            strokeWidth="2.5"
          />
          <rect
            x="127"
            y="70"
            width="9"
            height="26"
            rx="4.5"
            fill="#818CF8"
            stroke="#4F46E5"
            strokeWidth="2.5"
          />

          {/* Headphone Arch */}
          <path
            d="M33 70 C33 46 127 46 127 70"
            stroke="#6366F1"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
          />

          {/* Visor / Face Plate */}
          <rect
            x="44"
            y="56"
            width="72"
            height="46"
            rx="20"
            fill="#1E1B4B"
            stroke="#312E81"
            strokeWidth="2"
          />

          {/* Cheeks (Blush) */}
          <ellipse
            cx="54"
            cy="88"
            rx="5.5"
            ry="3.5"
            fill="#F472B6"
            opacity={isHovered ? '0.9' : '0.6'}
          />
          <ellipse
            cx="106"
            cy="88"
            rx="5.5"
            ry="3.5"
            fill="#F472B6"
            opacity={isHovered ? '0.9' : '0.6'}
          />

          {/* Left Eye */}
          {isWinking ? (
            <path
              d="M58 75 Q65 69 72 75"
              stroke="#60A5FA"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          ) : (
            <g>
              <ellipse cx="65" cy="74" rx="7" ry={isHovered ? 8 : 7} fill="#60A5FA" />
              <circle cx="63" cy="71" r="2.5" fill="#FFFFFF" />
              <circle cx="67" cy="76" r="1.2" fill="#FFFFFF" />
            </g>
          )}

          {/* Right Eye */}
          <g>
            <ellipse cx="95" cy="74" rx="7" ry={isHovered ? 8 : 7} fill="#60A5FA" />
            <circle cx="93" cy="71" r="2.5" fill="#FFFFFF" />
            <circle cx="97" cy="76" r="1.2" fill="#FFFFFF" />
          </g>

          {/* Mouth (Happy smile, opens on hover) */}
          {isHovered ? (
            <path
              d="M73 86 Q80 94 87 86 Z"
              fill="#F43F5E"
              stroke="#F43F5E"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M74 86 Q80 90 86 86"
              stroke="#93C5FD"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          )}

          {/* Round Glasses */}
          <rect
            x="53"
            y="63"
            width="24"
            height="22"
            rx="10"
            fill="none"
            stroke="#FBBF24"
            strokeWidth="2.5"
          />
          <rect
            x="83"
            y="63"
            width="24"
            height="22"
            rx="10"
            fill="none"
            stroke="#FBBF24"
            strokeWidth="2.5"
          />
          {/* Glasses Bridge */}
          <path
            d="M77 72 H83"
            stroke="#FBBF24"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Mascot Belly Screen / Tech badge */}
          <rect
            x="58"
            y="108"
            width="44"
            height="18"
            rx="8"
            fill="#EEF2FF"
            stroke="#C7D2FE"
            strokeWidth="1.5"
          />
          {/* Cute Code symbol </ > on belly */}
          <text
            x="80"
            y="121"
            fontSize="10"
            fontWeight="bold"
            fontFamily="monospace"
            fill="#4F46E5"
            textAnchor="middle"
          >
            {isHovered ? '{ ♥ }' : '</>'}
          </text>

          {/* Left Waving Hand */}
          <motion.g
            animate={
              isHovered
                ? { rotate: [0, -20, 15, -15, 0] }
                : { rotate: [0, -5, 0] }
            }
            transition={{
              duration: isHovered ? 0.7 : 3,
              repeat: isHovered ? 2 : Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '32px 105px' }}
          >
            <ellipse
              cx="26"
              cy="105"
              rx="9"
              ry="7"
              fill="#EEF2FF"
              stroke="#4F46E5"
              strokeWidth="3"
            />
          </motion.g>

          {/* Right Hand */}
          <ellipse
            cx="134"
            cy="105"
            rx="9"
            ry="7"
            fill="#EEF2FF"
            stroke="#4F46E5"
            strokeWidth="3"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="mascotGrad" x1="32" y1="42" x2="128" y2="132" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.7" stopColor="#F5F3FF" />
              <stop offset="1" stopColor="#EDE9FE" />
            </linearGradient>
          </defs>
        </svg>

        {/* Small floating badge */}
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center text-xs shadow-xs border-2 border-white animate-bounce">
          ⚡
        </div>
      </motion.div>

      {/* Helper text under mascot */}
      <span className="mt-2 text-[11px] text-stone-500 font-medium tracking-wide flex items-center gap-1">
        <Heart className="w-3 h-3 text-rose-400 fill-rose-400 inline" />
        <span>{lang === 'fa' ? 'برای تعامل کلیک کنید' : 'Click me for fun'}</span>
      </span>
    </div>
  );
};
