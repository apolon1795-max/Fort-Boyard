import { useState } from 'react';
import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Key, AlertCircle, CheckCircle2 } from 'lucide-react';

const QUESTIONS = [
  {
    question: "Кто является хранителем ключей и проводником команд на Форт Боярд?",
    options: ["Пасмюрт", "Паспарту", "Старец Фура", "Магистр теней"],
    correct: 1
  },
  {
    question: "Как зовут мудреца, загадывающего загадки на башне?",
    options: ["Мэтр теней", "Моника", "Старец Фура", "Ля Буль"],
    correct: 2
  },
  {
    question: "Какая главная цель игры в Форт Боярд?",
    options: ["Спасти принцессу", "Собрать золото Форта", "Победить монстра", "Найти выход"],
    correct: 1
  },
  {
    question: "Сколько ключей обычно нужно собрать команде?",
    options: ["3 ключа", "5 ключей", "7 ключей", "10 ключей"],
    correct: 2
  },
  {
    question: "Кто охраняет сокровищницу форта?",
    options: ["Тигры", "Львы", "Крокодилы", "Змеи"],
    correct: 0
  },
  {
    question: "Как зовут второго проводника, напарника Паспарту?",
    options: ["Пасмюрт", "Ля Буль", "Фелиндия", "Мэтр теней"],
    correct: 0
  },
  {
    question: "Что сыплется в сокровищнице в конце игры?",
    options: ["Песок", "Вода", "Золотые монеты", "Конфеты"],
    correct: 2
  },
  {
    question: "Кто бьет в гонг, давая старт игре?",
    options: ["Старец Фура", "Ля Буль", "Паспарту", "Мэтр теней"],
    correct: 1
  }
];

export default function QuizScreen({ onBack }: { onBack: () => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);

    if (idx === QUESTIONS[currentQ].correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedOpt(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const reset = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedOpt(null);
  };

  const q = QUESTIONS[currentQ];

  return (
    <ScreenLayout title="Викторина" onBack={onBack}>
      <div className="flex flex-col h-full max-w-sm mx-auto p-4">
        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-stone-400 font-mono text-sm">Вопрос {currentQ + 1}/{QUESTIONS.length}</span>
              <div className="flex gap-1 text-amber-500">
                {[...Array(QUESTIONS.length)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i <= currentQ ? 'bg-amber-500' : 'bg-stone-800'}`} />
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-8 leading-relaxed">
              {q.question}
            </h3>

            <div className="flex flex-col gap-3">
              {q.options.map((opt, i) => {
                const isSelected = selectedOpt === i;
                const isCorrect = selectedOpt !== null && i === q.correct;
                const isWrong = selectedOpt !== null && isSelected && i !== q.correct;
                
                return (
                  <motion.button
                    key={i}
                    whileHover={selectedOpt === null ? { scale: 1.02 } : {}}
                    whileTap={selectedOpt === null ? { scale: 0.98 } : {}}
                    onClick={() => handleSelect(i)}
                    className={`p-4 rounded-xl text-left border flex items-center justify-between transition-colors ${
                      selectedOpt === null 
                        ? 'glass-panel hover:bg-white/10 hover:border-amber-400/50 text-slate-200'
                        : isCorrect 
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                          : isWrong 
                            ? 'bg-red-500/20 border-red-500 text-red-500 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                            : 'glass-panel opacity-50 text-slate-400'
                    }`}
                  >
                    <span className="font-medium">{opt}</span>
                    {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    {isWrong && <AlertCircle className="w-5 h-5 text-red-500" />}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center mt-12">
            <h2 className="text-3xl font-cinzel font-bold text-amber-500 mb-2 drop-shadow-md">Испытание завершено</h2>
            <p className="text-slate-300 mb-8 text-lg font-medium">Вы ответили правильно на {score} из {QUESTIONS.length} вопросов.</p>
            
            {score === QUESTIONS.length ? (
              <div className="glass-panel border-amber-500/50 p-6 rounded-3xl flex flex-col items-center mb-8 w-full shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                <Key className="w-16 h-16 text-amber-400 mb-4 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
                <p className="font-bold text-xl text-amber-500 tracking-wider">Золотой Ключ Ваш!</p>
                <p className="text-sm text-slate-300 mt-2">Вы получаете скидку 10% на квест. Покажите это окно Хранителю.</p>
              </div>
            ) : (
              <div className="glass-panel p-6 rounded-3xl flex flex-col items-center mb-8 w-full">
                <p className="text-slate-300">Чтобы получить Золотой Ключ, нужно ответить верно на все вопросы. Попробуете еще раз?</p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reset}
              className="glass-panel border-amber-500/40 text-amber-400 px-8 py-4 rounded-xl font-bold tracking-wider hover:bg-amber-500/10 transition-colors"
            >
              Пройти снова
            </motion.button>
          </motion.div>
        )}
      </div>
    </ScreenLayout>
  );
}
