import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Calendar, Users, Phone, User, ExternalLink } from 'lucide-react';

export default function BookingScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenLayout title="Бронирование" onBack={onBack}>
      <div className="glass-panel rounded-3xl p-6 mb-6 shadow-xl">
        <p className="text-slate-300 mb-6 text-sm text-center">
          Оставьте заявку, и наши Хранители свяжутся с вами для подтверждения даты и времени вашего приключения.
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex glass-input rounded-xl overflow-hidden focus-within:border-amber-400/50 transition-colors">
            <div className="p-4 bg-white/5 border-r border-white/10 flex items-center justify-center">
              <User className="w-5 h-5 text-amber-500 shadow-amber-500/50 drop-shadow" />
            </div>
            <input type="text" placeholder="Ваше Имя" className="bg-transparent flex-1 px-4 text-white outline-none w-full placeholder:text-slate-400" />
          </div>

          <div className="flex glass-input rounded-xl overflow-hidden focus-within:border-amber-400/50 transition-colors">
            <div className="p-4 bg-white/5 border-r border-white/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-amber-500 shadow-amber-500/50 drop-shadow" />
            </div>
            <input type="tel" placeholder="Номер телефона" className="bg-transparent flex-1 px-4 text-white outline-none w-full placeholder:text-slate-400" />
          </div>

          <div className="flex glass-input rounded-xl overflow-hidden focus-within:border-amber-400/50 transition-colors">
            <div className="p-4 bg-white/5 border-r border-white/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-500 shadow-amber-500/50 drop-shadow" />
            </div>
            <input type="date" className="bg-transparent flex-1 px-4 text-slate-200 outline-none w-full [color-scheme:dark]" />
          </div>

          <div className="flex glass-input rounded-xl overflow-hidden focus-within:border-amber-400/50 transition-colors">
            <div className="p-4 bg-white/5 border-r border-white/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-amber-500 shadow-amber-500/50 drop-shadow" />
            </div>
            <input type="number" placeholder="Количество гостей" min="1" className="bg-transparent flex-1 px-4 text-white outline-none w-full placeholder:text-slate-400" />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.3)] uppercase tracking-wider text-sm"
          >
            Отправить заявку
          </motion.button>
        </form>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4">
         <span className="text-stone-500 text-sm uppercase tracking-widest font-cinzel">Или</span>
         <a
           href="https://территория-развлечений18.рф"
           target="_blank"
           rel="noreferrer"
           className="flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium underline underline-offset-4"
         >
           Перейти на официальный сайт <ExternalLink className="w-4 h-4" />
         </a>
      </div>
    </ScreenLayout>
  );
}
