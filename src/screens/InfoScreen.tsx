import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Star, MessageCircle, Info, MapPin, Clock, Phone, Heart, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function InfoScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState('desc');

  return (
    <ScreenLayout title="Информация" onBack={onBack}>
      <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar pb-2">
        {[
          { id: 'desc', label: 'ОБ ИГРЕ', icon: Info },
          { id: 'parents', label: 'РОДИТЕЛЯМ', icon: Heart },
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
              Форт Боярд в Ижевске — это захватывающее приключение, обещающее уникальные эмоции и незабываемые впечатления! Вас ждет увлекательный квест, который перенесет в мир таинственных испытаний и незабываемых сражений.
            </p>
            <p className="text-stone-300 text-sm leading-relaxed">
              Официальное квест-шоу — это реалистичные испытания, тонны реквизита, настоящие животные, спецэффекты и профессиональные ведущие.
            </p>
            <img src="https://i.ibb.co/JFdTdJPZ/ig-00b0998f5c841a1c0169ec643223c48191866cdc6328ac5943.png" alt="Игра" className="w-full h-40 object-cover rounded-xl mt-2 border border-white/10 opacity-90" />
          </motion.div>
        )}

        {activeTab === 'parents' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
            <h3 className="text-xl font-cinzel font-bold text-amber-500 mb-2">Почему родители выбирают нас?</h3>
            <ul className="flex flex-col gap-3">
              {[
                { title: 'Отдых "под ключ"', desc: 'Вы отдыхаете в банкетной зоне, пока профессиональные ведущие занимаются детьми на 100%.' },
                { title: 'Абсолютная безопасность', desc: 'Закрытая территория, безопасный сертифицированный реквизит и внимательные модераторы.' },
                { title: 'Польза для детей', desc: 'Квест развивает логику, смелость, командный дух и навык принятия решений.' },
                { title: 'Настоящие животные', desc: 'Экзотические животные участвуют в испытаниях под строгим контролем специалистов — это безопасно и вызывает неподдельный восторг!' },
                { title: 'Профессиональное фото/видео', desc: 'Мы запечатлим самые яркие моменты: живые эмоции будут радовать вас долгие годы.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start bg-black/20 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-100 text-sm mb-1">{item.title}</span>
                    <span className="block text-slate-300 text-xs leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {activeTab === 'reviews' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
            <p className="text-sm text-stone-300 mb-2">Наши гости на Яндекс.Картах и 2GIS:</p>
            {[
              { name: 'Елена (Яндекс.Карты)', text: 'Отмечали день рождения сына (10 лет). Сказать, что дети в восторге - ничего не сказать! Эмоции зашкаливали, испытания интересные, атмосфера полностью как в телешоу. Спасибо аниматорам!', rating: 5 },
              { name: 'Максим (2GIS)', text: 'Классное место для корпоратива. Организовали квест для нашей команды, все бегали, прыгали, отгадывали загадки. Мэтр Теней - просто топ! Очень антуражно, рекомендую!', rating: 5 },
              { name: 'Анна (Яндекс.Карты)', text: 'Все прошло на высшем уровне! Змеи и крысы - это отдельный вид экстрима для некоторых)) Но ведущие очень круто поддерживали детей. Обязательно вернемся!', rating: 5 },
            ].map((r, i) => (
              <div key={i} className="glass-panel bg-black/20 p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                   <span className="font-bold text-amber-400">{r.name}</span>
                   <div className="flex text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">
                     {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-500" />)}
                   </div>
                </div>
                <p className="text-slate-300 text-sm">{r.text}</p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'details' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-slate-100 mb-3">
                <Clock className="w-5 h-5 text-amber-500 drop-shadow" /> Длительность
              </h4>
              <p className="text-slate-300 text-sm ml-7">Мероприятие длится 2.5 часа (1.5 часа активная игра + 1 час чаепитие и дискотека).</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-slate-100 mb-3">
                <Phone className="w-5 h-5 text-amber-500 drop-shadow" /> Контакты и Адрес
              </h4>
              <p className="text-slate-300 text-sm ml-7 mb-1">Ижевск, Красноармейская, 126Г, РЦ «ПРИКАМЬЕ»</p>
              <p className="text-slate-300 text-sm ml-7 mb-1">Телефон: +7 (982) 117-67-86</p>
              <p className="text-slate-300 text-sm ml-7 mb-4">ВКонтакте: @fortboyard_izhevsk18</p>
              <a 
                href="https://yandex.ru/maps/?text=Ижевск,+Красноармейская,+126Г,+РЦ+«ПРИКАМЬЕ»"
                target="_blank"
                rel="noreferrer"
                className="ml-7 mb-4 inline-flex text-amber-400 hover:text-amber-500 text-sm font-bold underline decoration-amber-500/30 underline-offset-4"
              >
                Открыть в Яндекс.Картах
              </a>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 mt-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black/50">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?text=Ижевск,+Красноармейская,+126Г,+РЦ+«ПРИКАМЬЕ»" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  title="Yandex Map"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </ScreenLayout>
  );
}
