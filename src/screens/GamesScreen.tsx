import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Bomb, Dices, Layers, Trophy } from 'lucide-react';

export default function GamesScreen({ onBack, onNavigate }: { onBack: () => void, onNavigate: (s:string) => void }) {
  return (
    <ScreenLayout title="Мини-игры" onBack={onBack}>
      <p className="text-center text-stone-400 mb-8 text-sm">
        Здесь Мэтр Теней приготовил для вас испытания. Тренируйтесь перед настоящей игрой!
      </p>

      <div className="grid gap-4">
        {[
          { id: 'minesweeper', label: 'Сапер', desc: 'Найди золото, избегай ловушек', icon: Bomb, color: 'text-red-500' },
          { id: 'roulette', label: 'Рулетка', desc: 'Испытай удачу Форта', icon: Dices, color: 'text-emerald-500' },
          { id: 'quiz', label: 'Викторина', desc: 'Тесты на знание игры', icon: Layers, color: 'text-blue-500' },
        ].map(game => (
          <motion.button
            key={game.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate(`game-${game.id}`)}
            className="glass-panel p-5 rounded-2xl flex items-center justify-between group hover:border-amber-400/50 hover:bg-white/10 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
                 <game.icon className={`w-7 h-7 drop-shadow-md ${game.color}`} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg text-slate-100">{game.label}</h4>
                <p className="text-sm text-slate-400">{game.desc}</p>
              </div>
            </div>
            <div className="text-amber-500 px-4 py-2 font-bold bg-black/20 rounded-xl border border-white/10 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors text-xs uppercase tracking-wider backdrop-blur-sm shadow-inner group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              Играть
            </div>
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('leaderboard')}
        className="fixed bottom-6 right-6 lg:right-[calc(50%-200px+24px)] bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 p-4 rounded-full shadow-[0_5px_20px_rgba(245,158,11,0.5)] border border-amber-300 z-50 flex gap-2 items-center font-bold"
      >
        <Trophy className="w-6 h-6" />
        <span className="hidden md:inline mr-2">Список лидеров</span>
      </motion.button>
    </ScreenLayout>
  );
}
