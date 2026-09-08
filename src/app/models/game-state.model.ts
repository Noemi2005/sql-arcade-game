export type GameScreen = 'HOME' | 'GAME' | 'GAME_OVER' | 'RECORDS' | 'CATEGORIES';

export interface GameStats {
  score: number;
  lives: number;
  streak: number;
  maxStreak: number;
  level: number;
  questionsAnswered: number;
  correctAnswers: number;
  speedBonuses: number;
  timeRemaining: number;
}

export interface LocalRecords {
  highScore: number;
  bestStreak: number;
  highestLevel: number;
  gamesPlayed: number;
  totalCorrect: number;
  lastPlayedDate?: string;
}
