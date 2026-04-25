import { motion } from 'motion/react';
import { CalendarDays, Info, Gamepad2, Key, Phone } from 'lucide-react';

export default function MainMenuScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-8 pb-8 px-6 text-slate-100 relative z-10 w-full">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 w-full">
         <div className="w-24 h-24 mx-auto bg-black/40 rounded-full border border-amber-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            <Key className="w-12 h-12 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
         </div>
         <h2 className="text-4xl font-cinzel text-amber-500 font-bold uppercase tracking-widest drop-shadow-md">Форт Боярд</h2>
         <p className="text-slate-300 text-sm mt-3 uppercase tracking-widest font-bold">Официальное квест-шоу</p>
      </motion.div>

      <div className="flex flex-col gap-5 w-full justify-center max-w-sm mx-auto">
        
        {/* HUGE MAIN CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate('booking')}
          className="relative overflow-hidden group rounded-[2rem] p-[2px] w-full"
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-[2rem] opacity-70 group-hover:opacity-100 transition-opacity blur-[2px]" />
          
          <div className="relative bg-gradient-to-b from-stone-900 to-black px-6 py-8 rounded-[calc(2rem-2px)] flex flex-col items-center justify-center gap-3">
             <CalendarDays className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
             <span className="font-cinzel font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-500 drop-shadow-sm uppercase tracking-wider">
               Бронировать
             </span>
             <span className="text-xs text-slate-300 tracking-widest uppercase">Заказать праздник</span>
          </div>
        </motion.button>
        
        {/* ROW OF 2 SECONDARY TASKS */}
        <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('games')}
              className="glass-panel p-5 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-amber-400/70 hover:bg-white/10 transition-colors shadow-lg group"
            >
              <Gamepad2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)] transition-colors" />
              <div className="text-center">
                <span className="block font-bold text-sm text-slate-100">Выиграй скидку</span>
                <span className="block text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Мини-игры</span>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('info')}
              className="glass-panel p-5 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-amber-400/70 hover:bg-white/10 transition-colors shadow-lg group"
            >
              <Info className="w-8 h-8 text-amber-500 group-hover:text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)] transition-colors" />
              <div className="text-center">
                <span className="block font-bold text-sm text-slate-100">Легенда</span>
                <span className="block text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Об игре</span>
              </div>
            </motion.button>
        </div>

        {/* CONTACTS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel rounded-3xl p-6 shadow-lg"
        >
          <div className="flex flex-col gap-3 text-sm text-slate-200 justify-center items-center text-center">
            <a href="tel:+79821176786" className="flex items-center gap-2 hover:text-amber-400 font-bold transition-colors text-lg"><Phone className="w-5 h-5 text-amber-500" /> +7 (982) 117-67-86</a>
            <p className="text-slate-400 text-xs">Ижевск, Красноармейская, 126Г, РЦ «ПРИКАМЬЕ»</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
