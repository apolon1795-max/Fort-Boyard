import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Trophy, Medal, Award } from 'lucide-react';

export default function LeaderboardScreen({ onBack }: { onBack: () => void }) {
  const leaders = [
    { name: 'Артём М.', score: 10500, icon: <Trophy className="w-5 h-5 text-yellow-400" /> },
    { name: 'Дарья К.', score: 9800, icon: <Medal className="w-5 h-5 text-stone-300" /> },
    { name: 'Максим', score: 8500, icon: <Award className="w-5 h-5 text-amber-700" /> },
    { name: 'Егор В.', score: 7200, icon: null },
    { name: 'София', score: 6900, icon: null },
    { name: 'Михаил', score: 6100, icon: null },
    { name: 'Алиса', score: 5500, icon: null },
  ];

  return (
    <ScreenLayout title="Список лидеров" onBack={onBack}>
      <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
        <div className="p-8 border-b border-white/10 text-center relative z-10">
           <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
           <h3 className="text-amber-500 font-cinzel font-bold text-2xl">Зал Славы Форта</h3>
           <p className="text-slate-300 text-xs mt-2 uppercase tracking-widest font-bold">Лучшие искатели</p>
        </div>
        
        <div className="divide-y divide-white/5 relative z-10">
          {leaders.map((leader, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              key={i} 
              className={`p-5 flex items-center justify-between transition-colors hover:bg-white/5 ${i < 3 ? 'bg-black/10' : 'bg-transparent'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  i === 0 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 shadow-[0_0_15px_rgba(250,204,21,0.3)] backdrop-blur' :
                  i === 1 ? 'bg-slate-300/10 text-slate-300 border border-slate-300/30 backdrop-blur' :
                  i === 2 ? 'bg-amber-700/20 text-amber-500 border border-amber-700/50 backdrop-blur' :
                  'bg-black/20 text-slate-500 border border-white/10'
                }`}>
                  {i + 1}
                </div>
                <span className={`font-bold text-lg ${i < 3 ? 'text-slate-100' : 'text-slate-400'}`}>
                  {leader.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-amber-500 font-bold tracking-wider">{leader.score.toLocaleString()}</span>
                {leader.icon && <div className="w-6 drop-shadow-md">{leader.icon}</div>}
                {!leader.icon && <div className="w-6" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScreenLayout>
  );
}
