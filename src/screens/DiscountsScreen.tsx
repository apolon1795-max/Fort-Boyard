import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Percent, Ticket, Gem } from 'lucide-react';

export default function DiscountsScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenLayout title="Скидки и предложения" onBack={onBack}>
      <div className="glass-panel border-amber-500/50 rounded-3xl p-6 mb-8 text-center shadow-[0_0_20px_rgba(245,158,11,0.15)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
        <h3 className="text-amber-500 font-cinzel font-bold text-xl mb-2 relative z-10">Акции буднего дня</h3>
        <p className="text-slate-300 text-sm relative z-10">С понедельника по четверг действуют специальные выгодные условия на организацию праздника!</p>
      </div>

      <div className="flex flex-col gap-4">
        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel hover:bg-white/10 rounded-2xl p-5 flex items-start gap-4 cursor-pointer transition-colors">
          <div className="bg-black/20 p-3 rounded-lg text-amber-400 border border-white/10"><Percent className="w-6 h-6 drop-shadow" /></div>
          <div>
            <h4 className="font-bold text-slate-100 mb-1">Скидки на мой заказ</h4>
            <p className="text-sm text-slate-400">Персональные предложения для вашей будущей игры.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel hover:bg-white/10 rounded-2xl p-5 flex items-start gap-4 cursor-pointer transition-colors">
          <div className="bg-black/20 p-3 rounded-lg text-amber-400 border border-white/10"><Ticket className="w-6 h-6 drop-shadow" /></div>
          <div>
            <h4 className="font-bold text-slate-100 mb-1">Скидки от стоимости услуги</h4>
            <p className="text-sm text-slate-400">Чем больше пакет, тем выгоднее цена за участника.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel border-amber-500/40 rounded-2xl p-5 flex items-start gap-4 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-amber-500/5" />
          <div className="bg-amber-500/20 p-3 rounded-lg text-amber-400 border border-amber-500/30 relative z-10"><Gem className="w-6 h-6 drop-shadow" /></div>
          <div className="relative z-10">
            <h4 className="font-bold text-amber-400 mb-1">Постоянным клиентам</h4>
            <p className="text-sm text-slate-400">Особые привилегии и бонусы для тех, кто возвращается в Форт снова.</p>
          </div>
        </motion.div>
      </div>
    </ScreenLayout>
  );
}
