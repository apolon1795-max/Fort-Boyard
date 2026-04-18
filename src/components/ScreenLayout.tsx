import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';

export default function ScreenLayout({
  title,
  onBack,
  children
}: {
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-slate-100 relative">
      <header className="sticky top-0 z-50 glass-panel rounded-b-2xl border-b border-white/20 px-4 py-4 mb-4 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 text-white/70 hover:text-amber-400 transition-colors rounded-full hover:bg-white/10">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-cinzel font-bold text-amber-500 tracking-wider w-full text-center pr-8">
          {title}
        </h1>
      </header>
      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 pb-24"
      >
        {children}
      </motion.main>
    </div>
  );
}
