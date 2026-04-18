import { motion } from 'motion/react';
import { CalendarDays, Percent, Info, Gamepad2, MapPin, Phone, Instagram } from 'lucide-react';

const menuItems = [
  { id: 'booking', label: 'Бронируй праздник', icon: CalendarDays },
  { id: 'discounts', label: 'Скидки и предложения', icon: Percent },
  { id: 'info', label: 'Информация', icon: Info },
  { id: 'games', label: 'Мини-игры', icon: Gamepad2 },
];

export default function MainMenuScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen flex flex-col pt-12 pb-8 px-6 text-slate-100">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
         <h2 className="text-3xl font-cinzel text-amber-500 font-bold uppercase tracking-widest">Тайны Форта</h2>
         <p className="text-stone-400 text-sm mt-2">Главное меню</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 mb-10 flex-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate(item.id)}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:border-amber-400/50 hover:bg-white/10 transition-colors group rounded-3xl"
            >
              <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center border border-white/10 group-hover:border-amber-400/50 transition-colors shadow-inner">
                <Icon className="w-8 h-8 text-amber-500 shadow-amber-500/50 drop-shadow-md" />
              </div>
              <span className="font-semibold text-center text-sm">{item.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="mb-8 font-sans">
        <h3 className="text-lg font-semibold text-amber-500 mb-4 font-cinzel">Локация</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/fortress${i}/300/200`}
              alt="Зона отдыха"
              className="w-64 h-40 object-cover rounded-xl snap-center flex-shrink-0 border border-stone-800 opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-amber-500 mb-4 font-cinzel">Контакты</h3>
        <div className="flex flex-col gap-3 text-sm text-slate-300">
          <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-500" /> +7 (982) 117-67-86</p>
          <a href="https://vk.com/fortboyard_izhevsk18" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors"><Instagram className="w-4 h-4 text-amber-500" /> @fortboyard_izhevsk18</a>
        </div>
      </div>
    </div>
  );
}
