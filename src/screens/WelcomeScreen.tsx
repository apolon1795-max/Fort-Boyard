import { motion } from 'motion/react';

export default function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-end p-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-50"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/fortboyard_hq/1080/1920)' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 text-center flex flex-col items-center w-full pb-12"
      >
        <h1 className="text-5xl font-extrabold text-amber-500 font-cinzel mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center uppercase tracking-widest leading-tight">
          Тайны Форта
        </h1>
        <p className="text-xl text-slate-200 font-medium max-w-sm text-center mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Подари ребёнку незабываемое приключение
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="glass-panel hover:bg-white/10 text-amber-500 hover:text-amber-400 text-xl font-bold w-full max-w-xs py-4 rounded-3xl shadow-[0_0_30px_rgba(245,158,11,0.2)] border-amber-500/50 hover:border-amber-400 uppercase tracking-widest transition-all"
        >
          Начать
        </motion.button>
      </motion.div>
    </div>
  );
}
