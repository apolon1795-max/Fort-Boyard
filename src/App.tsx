import { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import BookingScreen from './screens/BookingScreen';
import InfoScreen from './screens/InfoScreen';
import GamesScreen from './screens/GamesScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import MinesweeperScreen from './screens/MinesweeperScreen';
import RouletteScreen from './screens/RouletteScreen';
import QuizScreen from './screens/QuizScreen';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <div className="max-w-md mx-auto min-h-screen shadow-2xl bg-[#020617] relative overflow-hidden ring-1 ring-white/10">
      {/* Animated Bright Gradient Blobs */}
      <div className="bg-blob w-80 h-80 bg-amber-500/30 -top-10 -left-20"></div>
      <div className="bg-blob w-96 h-96 bg-blue-600/20 bottom-0 -right-20" style={{ animationDelay: '2s' }}></div>
      <div className="bg-blob w-64 h-64 bg-rose-600/20 top-1/2 left-1/4" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 w-full h-full min-h-screen">
        {screen === 'welcome' && <WelcomeScreen onNext={() => setScreen('main')} />}
        {screen === 'main' && <MainMenuScreen onNavigate={(s) => setScreen(s)} />}
        {screen === 'booking' && <BookingScreen onBack={() => setScreen('main')} />}
        {screen === 'info' && <InfoScreen onBack={() => setScreen('main')} />}
        {screen === 'games' && <GamesScreen onBack={() => setScreen('main')} onNavigate={(s) => setScreen(s)} />}
        {screen === 'leaderboard' && <LeaderboardScreen onBack={() => setScreen('games')} />}
        {screen === 'game-minesweeper' && <MinesweeperScreen onBack={() => setScreen('games')} />}
        {screen === 'game-roulette' && <RouletteScreen onBack={() => setScreen('games')} />}
        {screen === 'game-quiz' && <QuizScreen onBack={() => setScreen('games')} />}
      </div>
    </div>
  );
}
