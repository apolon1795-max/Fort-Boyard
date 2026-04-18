import { useState } from 'react';
import ScreenLayout from '../components/ScreenLayout';
import { motion, AnimatePresence } from 'motion/react';
import { Dices, Ticket, Key, Star, Gift, Gem } from 'lucide-react';

const PRIZES = [
  { id: 1, name: 'Скидка 5%', icon: Ticket, color: 'text-amber-500', desc: 'Скидка 5% на любой базовый пакет услуг при бронировании Дня Рождения.' },
  { id: 2, name: 'Ключ 10%', icon: Key, color: 'text-blue-400', desc: 'Уникальная скидка 10% на премиум-сценарии с участием Старца Фуры.' },
  { id: 3, name: 'Сувенир', icon: Star, color: 'text-stone-300', desc: 'Фирменный магнит или браслет с символикой Форт Боярд на каждого гостя.' },
  { id: 4, name: 'Х2 Баллов', icon: Dices, color: 'text-purple-400', desc: 'Удвоение баллов лояльности за вашу игру.' },
  { id: 5, name: 'Сладкий приз', icon: Gift, color: 'text-emerald-500', desc: 'Секретный сладкий сундук от Паспарту для именинника и его друзей.' },
  { id: 6, name: '+1 Игра', icon: Gem, color: 'text-yellow-400', desc: 'Дополнительная эксклюзивная мини-игра во время вашего мероприятия.' },
];

export default function RouletteScreen({ onBack }: { onBack: () => void }) {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<typeof PRIZES[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  const generatePromo = () => {
    return 'LUCK-' + Math.random().toString(36).substring(2, 6).toUpperCase();
  };

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    let spins = 0;
    const maxSpins = 30 + Math.floor(Math.random() * 20); 
    
    const winnerIndex = Math.floor(Math.random() * PRIZES.length);

    const interval = setInterval(() => {
      spins++;
      setCurrentIndex((prev) => (prev + 1) % PRIZES.length);

      if (spins > maxSpins) {
        clearInterval(interval);
        setCurrentIndex(winnerIndex);
        setResult(PRIZES[winnerIndex]);
        setPromoCode(generatePromo());
        setSpinning(false);
      }
    }, 100);
  };

  const currentPrize = PRIZES[currentIndex];
  const Icon = currentPrize.icon;

  return (
    <ScreenLayout title="Рулетка Судьбы" onBack={onBack}>
      <div className="flex flex-col items-center p-4">
        <p className="text-slate-200 text-center mb-8 text-sm leading-relaxed max-w-sm glass-panel p-4 rounded-3xl">
          Колесо Мэтра Теней. Испытайте свою удачу и получите специальный бонус, который сделает ваш праздник еще ярче!
        </p>

        <div className="relative w-64 h-64 border-[6px] border-white/10 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden mb-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -20 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <Icon className={`w-16 h-16 ${currentPrize.color} mb-3 filter drop-shadow-[0_4px_15px_currentColor]`} />
              <span className={`font-cinzel font-bold text-center text-xl tracking-wider ${currentPrize.color}`}>
                {currentPrize.name}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Pointer purely for visual flavor */}
          <div className="absolute top-0 w-6 h-6 bg-amber-500 rotate-45 transform -translate-y-3 shadow-[0_0_15px_rgba(245,158,11,1)] rounded-sm border-2 border-white/20" />
        </div>

        {result ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full max-w-sm">
            <h3 className="text-2xl font-cinzel font-bold text-slate-100 mb-4">Ваш приз:</h3>
            <div className="glass-panel border-amber-500/40 p-6 rounded-[2rem] shadow-[0_0_30px_rgba(245,158,11,0.2)] flex flex-col items-center relative overflow-hidden">
               <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
               <result.icon className={`w-14 h-14 ${result.color} mb-4 drop-shadow-md`} />
               <p className={`text-2xl font-bold tracking-wider mb-2 ${result.color}`}>{result.name}</p>
               <p className="text-sm text-slate-300 mb-6 text-balance">{result.desc}</p>
               
               <div className="bg-black/30 w-full py-5 rounded-2xl border border-white/10 mb-2 backdrop-blur-md shadow-inner">
                 <p className="text-slate-400 text-xs mb-2 uppercase tracking-widest font-bold">Ваш промокод</p>
                 <p className="font-mono text-2xl text-amber-400 tracking-[0.2em] font-bold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">{promoCode}</p>
               </div>
               
               <p className="text-xs text-slate-400 mt-2 text-balance leading-relaxed">
                 Назовите этот код нашему менеджеру или сделайте скриншот при бронировании праздника.
               </p>
            </div>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={spin}
            disabled={spinning}
            className={`w-full max-w-xs bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold text-xl py-4 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] uppercase tracking-widest mt-4 ${spinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {spinning ? 'Вращение...' : 'Крутить'}
          </motion.button>
        )}
      </div>
    </ScreenLayout>
  );
}
