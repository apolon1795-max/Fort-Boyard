import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Star, MessageCircle, Info, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function InfoScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState('desc');

  return (
    <ScreenLayout title="Информация" onBack={onBack}>
      <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar pb-2">
        {[
          { id: 'desc', label: 'ОБ ИГРЕ', icon: Info },
          { id: 'reviews', label: 'ОТЗЫВЫ', icon: MessageCircle },
          { id: 'details', label: 'ДЕТАЛИ', icon: MapPin },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs tracking-widest whitespace-nowrap transition-all backdrop-blur-md ${
              activeTab === tab.id
                ? 'bg-amber-500 text-stone-950 shadow-[0_4px_20px_rgba(245,158,11,0.4)]'
                : 'glass-panel text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="glass-panel rounded-3xl p-6 min-h-[50vh]">
        {activeTab === 'desc' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
            <h3 className="text-xl font-cinzel font-bold text-amber-500 mb-2">Легендарное шоу</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Официальное квест-шоу Форт Боярд — это реалистичные испытания,
              тонны реквизита, настоящие животные, спецэффекты и профессиональные ведущие.
            </p>
            <p className="text-stone-300 text-sm leading-relaxed">
              Ребятам предстоит пройти испытания на силу, ловкость и смекалку, собрать ключи
              и разгадать шифр, чтобы добыть золото Форта!
            </p>
            <img src="https://picsum.photos/seed/quest/600/300" alt="Игра" className="w-full h-40 object-cover rounded-xl mt-2 border border-stone-800 opacity-90" />
          </motion.div>
        )}

        {activeTab === 'reviews' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
            {[
              { name: 'Мария В.', text: 'Праздновали 10 лет сыну. Дети в полном восторге! Крысы, змеи - все настоящее!', rating: 5 },
              { name: 'Алексей', text: 'Крутая атмосфера, Пасмюрт просто огонь. Обязательно вернемся.', rating: 5 },
              { name: 'Елена К.', text: 'Организация на высшем уровне. Родителям тоже было интересно наблюдать.', rating: 5 },
            ].map((r, i) => (
              <div key={i} className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                <div className="flex items-center justify-between mb-2">
                   <span className="font-bold text-amber-500">{r.name}</span>
                   <div className="flex text-amber-500">
                     {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-500" />)}
                   </div>
                </div>
                <p className="text-stone-400 text-sm">{r.text}</p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'details' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-stone-200 mb-3">
                <Clock className="w-5 h-5 text-amber-500" /> Длительность
              </h4>
              <p className="text-stone-400 text-sm ml-7">Мероприятие длится 2.5 часа (1.5 часа активная игра + 1 час чаепитие и дискотека).</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-stone-200 mb-3">
                <MapPin className="w-5 h-5 text-amber-500" /> Локация и Бронь
              </h4>
              <p className="text-stone-400 text-sm ml-7 mb-1">Ижевск (точный адрес площадки сообщит менеджер)</p>
              <p className="text-stone-400 text-sm ml-7 mb-3">Телефон: +7 (982) 117-67-86</p>
            </div>
          </motion.div>
        )}
      </div>
    </ScreenLayout>
  );
}
