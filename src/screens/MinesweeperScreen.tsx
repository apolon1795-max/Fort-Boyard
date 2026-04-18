import { useState, useEffect } from 'react';
import ScreenLayout from '../components/ScreenLayout';
import { motion } from 'motion/react';
import { Skull, Gem, RefreshCw } from 'lucide-react';

const GRID_SIZE = 16;
const BOMBS_COUNT = 4;

type CellType = 'empty' | 'bomb' | 'gold';

export default function MinesweeperScreen({ onBack }: { onBack: () => void }) {
  const [grid, setGrid] = useState<CellType[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(Array(GRID_SIZE).fill(false));
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const initGame = () => {
    const newGrid = Array(GRID_SIZE).fill('empty');
    // Place gold
    const goldIndex = Math.floor(Math.random() * GRID_SIZE);
    newGrid[goldIndex] = 'gold';

    // Place bombs
    let bombsPlaced = 0;
    while (bombsPlaced < BOMBS_COUNT) {
      const bIndex = Math.floor(Math.random() * GRID_SIZE);
      if (newGrid[bIndex] === 'empty') {
        newGrid[bIndex] = 'bomb';
        bombsPlaced++;
      }
    }

    setGrid(newGrid);
    setRevealed(Array(GRID_SIZE).fill(false));
    setGameOver(false);
    setWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCellClick = (index: number) => {
    if (gameOver || won || revealed[index]) return;

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (grid[index] === 'bomb') {
      setGameOver(true);
      // Reveal everything
      setRevealed(Array(GRID_SIZE).fill(true));
    } else if (grid[index] === 'gold') {
      setWon(true);
      // Reveal everything
      setRevealed(Array(GRID_SIZE).fill(true));
    }
  };

  return (
    <ScreenLayout title="Сапёр" onBack={onBack}>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="glass-panel p-5 rounded-3xl mb-8">
          <p className="text-slate-200 text-center text-sm leading-relaxed font-medium">
            Перед вами 16 каменных плит. Под одной из них спрятано Золото Мэтра Теней! Кликайте по плитам, чтобы перевернуть их. Под безопасными плитами — пусто, но берегитесь <strong className="text-white">Черепов</strong> — если наткнетесь на них, игра закончится. Вперед, искатель!
          </p>
        </div>

        <div className="glass-panel p-6 rounded-[2rem] shadow-2xl w-full max-w-sm mb-8 relative overflow-hidden">
          <div className="grid grid-cols-4 gap-3 relative z-10">
            {grid.map((cell, i) => (
              <motion.button
                key={i}
                whileHover={!revealed[i] && !gameOver && !won ? { scale: 1.05 } : {}}
                whileTap={!revealed[i] && !gameOver && !won ? { scale: 0.95 } : {}}
                onClick={() => handleCellClick(i)}
                className={`aspect-square rounded-2xl flex items-center justify-center text-3xl font-bold transition-all ${
                  !revealed[i]
                    ? 'bg-black/40 backdrop-blur-md border-[3px] border-white/10 border-b-[6px] border-b-black/80 hover:bg-black/30'
                    : cell === 'bomb'
                    ? 'bg-red-500/20 backdrop-blur-md border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                    : cell === 'gold'
                    ? 'bg-amber-500/20 backdrop-blur-md border-2 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                    : 'bg-black/10 border-2 border-transparent shadow-inner'
                }`}
              >
                {revealed[i] && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    {cell === 'bomb' && <Skull className="w-8 h-8 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />}
                    {cell === 'gold' && <Gem className="w-8 h-8 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {gameOver && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
            <h3 className="text-2xl font-cinzel font-bold text-stone-400 mb-2 flex items-center justify-center gap-2">
              <Skull className="w-6 h-6" /> Провал испытания
            </h3>
            <p className="text-stone-500 mb-6 font-medium">Вы наткнулись на черную метку.</p>
          </motion.div>
        )}

        {won && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center w-full max-w-sm">
            <h3 className="text-2xl font-cinzel font-bold text-amber-500 mb-2 drop-shadow-md">Победа!</h3>
            <p className="text-stone-300 mb-4 font-medium">Вы нашли золотой самородок Форта!</p>
            <div className="bg-stone-900 border border-amber-500/50 p-5 rounded-2xl mb-6 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              <p className="text-amber-500 font-bold mb-2">Ваш промокод на скидку 5%:</p>
              <div className="bg-stone-950 font-mono text-2xl tracking-widest py-3 rounded-lg border border-stone-800 mb-3 text-stone-200">
                FORT-B5
              </div>
              <p className="text-stone-400 text-xs text-balance">
                Сделайте скриншот этого экрана или назовите промокод при подтверждении бронирования.
              </p>
            </div>
          </motion.div>
        )}

        {(gameOver || won) && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={initGame}
            className="flex items-center gap-2 bg-stone-800 text-stone-200 px-6 py-3 rounded-xl border border-stone-700 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
          >
            <RefreshCw className="w-5 h-5" /> Попробовать снова
          </motion.button>
        )}
      </div>
    </ScreenLayout>
  );
}
