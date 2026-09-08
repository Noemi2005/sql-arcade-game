import { Injectable, signal, computed } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Question } from '../models/question.model';
import { GameScreen } from '../models/game-state.model';
import { QuestionService } from './question.service';
import { SoundService } from './sound.service';
import { StorageService } from './storage.service';

const INITIAL_LIVES = 3;
const DEFAULT_TIME_LIMIT = 50; // Temporizador estricto de 50 segundos por pregunta

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // Signals para el estado del juego
  screen = signal<GameScreen>('HOME');
  
  questions = signal<Question[]>([]);
  currentIndex = signal<number>(0);

  score = signal<number>(0);
  lives = signal<number>(INITIAL_LIVES);
  streak = signal<number>(0);
  maxStreak = signal<number>(0);
  level = signal<number>(1);
  questionsAnswered = signal<number>(0);
  correctAnswersCount = signal<number>(0);
  
  // RxJS Question Timer State
  timeRemaining = signal<number>(DEFAULT_TIME_LIMIT);
  timerActive = signal<boolean>(false);
  private timerSubscription: Subscription | null = null;

  // Auto-advance Timer State
  autoAdvanceRemaining = signal<number>(0);
  autoAdvanceActive = signal<boolean>(false);
  private autoAdvanceSubscription: Subscription | null = null;

  // Feedback State
  selectedOption = signal<number | null>(null);
  isAnswerSubmitted = signal<boolean>(false);
  lastAnswerCorrect = signal<boolean>(false);
  lastSpeedBonus = signal<number>(0);
  lastPointsEarned = signal<number>(0);

  // Record Notification Signals
  isNewHighScore = signal<boolean>(false);
  isNewBestStreak = signal<boolean>(false);

  currentQuestion = computed(() => {
    const list = this.questions();
    const idx = this.currentIndex();
    return list[idx] || null;
  });

  accuracyPercentage = computed(() => {
    const answered = this.questionsAnswered();
    if (answered === 0) return 0;
    return Math.round((this.correctAnswersCount() / answered) * 100);
  });

  constructor(
    private questionService: QuestionService,
    private soundService: SoundService,
    private storageService: StorageService
  ) {}

  startNewGame(): void {
    this.soundService.playCoin();
    this.score.set(0);
    this.lives.set(INITIAL_LIVES);
    this.streak.set(0);
    this.maxStreak.set(0);
    this.level.set(1);
    this.questionsAnswered.set(0);
    this.correctAnswersCount.set(0);
    this.currentIndex.set(0);

    const pool = this.questionService.getRandomGamePool(25);
    this.questions.set(pool);

    this.selectedOption.set(null);
    this.isAnswerSubmitted.set(false);

    this.screen.set('GAME');
    this.startTimer();
  }

  /**
   * Inicia el temporizador de 50 segundos con RxJS
   */
  startTimer(): void {
    this.clearAllTimers();
    const currentQ = this.currentQuestion();
    const limit = currentQ?.timeLimit || DEFAULT_TIME_LIMIT;
    this.timeRemaining.set(limit);
    this.timerActive.set(true);

    this.timerSubscription = interval(1000).subscribe(() => {
      const remaining = this.timeRemaining() - 1;
      if (remaining <= 0) {
        this.timeRemaining.set(0);
        this.clearQuestionTimer();
        this.handleTimeout();
      } else {
        this.timeRemaining.set(remaining);
        if (remaining <= 5) {
          this.soundService.playTick();
        }
      }
    });
  }

  clearQuestionTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
    this.timerActive.set(false);
  }

  clearAutoAdvanceTimer(): void {
    if (this.autoAdvanceSubscription) {
      this.autoAdvanceSubscription.unsubscribe();
      this.autoAdvanceSubscription = null;
    }
    this.autoAdvanceActive.set(false);
    this.autoAdvanceRemaining.set(0);
  }

  clearAllTimers(): void {
    this.clearQuestionTimer();
    this.clearAutoAdvanceTimer();
  }

  /**
   * Evalúa la respuesta del usuario instantáneamente
   */
  selectOption(optionIndex: number): void {
    if (this.isAnswerSubmitted() || !this.currentQuestion()) return;

    this.clearQuestionTimer();
    this.selectedOption.set(optionIndex);
    this.isAnswerSubmitted.set(true);

    const currentQ = this.currentQuestion()!;
    const isCorrect = optionIndex === currentQ.correctAnswer;
    this.lastAnswerCorrect.set(isCorrect);
    this.questionsAnswered.update(val => val + 1);

    if (isCorrect) {
      this.correctAnswersCount.update(val => val + 1);
      const newStreak = this.streak() + 1;
      this.streak.set(newStreak);
      if (newStreak > this.maxStreak()) {
        this.maxStreak.set(newStreak);
      }

      // Cálculo del bono de velocidad con base en 50 segundos
      const speedBonus = Math.floor((this.timeRemaining() / DEFAULT_TIME_LIMIT) * 50);
      this.lastSpeedBonus.set(speedBonus);

      // Multiplicador por racha
      let multiplier = 1;
      if (newStreak >= 10) multiplier = 3;
      else if (newStreak >= 5) multiplier = 2;
      else if (newStreak >= 3) multiplier = 1.5;

      const basePoints = 100;
      const pointsEarned = Math.round((basePoints + speedBonus) * multiplier);
      this.lastPointsEarned.set(pointsEarned);
      this.score.update(s => s + pointsEarned);

      // Progresión de nivel
      const nextLevel = Math.min(8, Math.floor(this.questionsAnswered() / 3) + 1);
      if (nextLevel > this.level()) {
        this.level.set(nextLevel);
        this.soundService.playLevelUp();
      } else {
        if (newStreak % 3 === 0) {
          this.soundService.playStreak();
        } else {
          this.soundService.playCorrect();
        }
      }
    } else {
      // Respuesta incorrecta
      this.soundService.playWrong();
      this.streak.set(0);
      this.lastSpeedBonus.set(0);
      this.lastPointsEarned.set(0);
      const currentLives = this.lives() - 1;
      this.lives.set(currentLives);
    }
  }

  /**
   * Maneja el agotamiento del temporizador (Time-out)
   */
  handleTimeout(): void {
    if (this.isAnswerSubmitted() || !this.currentQuestion()) return;

    this.selectedOption.set(-1); // Ninguna opción seleccionada por el usuario
    this.isAnswerSubmitted.set(true);
    this.lastAnswerCorrect.set(false);
    this.questionsAnswered.update(val => val + 1);
    this.soundService.playWrong();
    this.streak.set(0);
    this.lastSpeedBonus.set(0);
    this.lastPointsEarned.set(0);

    const currentLives = this.lives() - 1;
    this.lives.set(currentLives);
  }

  nextQuestion(): void {
    this.clearAllTimers();

    if (this.lives() <= 0) {
      this.triggerGameOver();
      return;
    }

    const nextIdx = this.currentIndex() + 1;
    if (nextIdx >= this.questions().length) {
      // Completado el conjunto de preguntas
      this.triggerGameOver();
    } else {
      this.currentIndex.set(nextIdx);
      this.selectedOption.set(null);
      this.isAnswerSubmitted.set(false);
      this.startTimer();
    }
  }

  triggerGameOver(): void {
    this.clearAllTimers();
    this.soundService.playGameOver();

    const recordResult = this.storageService.saveGameResult(
      this.score(),
      this.maxStreak(),
      this.level(),
      this.correctAnswersCount()
    );

    this.isNewHighScore.set(recordResult.isNewHighScore);
    this.isNewBestStreak.set(recordResult.isNewBestStreak);
    this.screen.set('GAME_OVER');
  }

  goToHome(): void {
    this.clearAllTimers();
    this.screen.set('HOME');
  }

  goToRecords(): void {
    this.screen.set('RECORDS');
  }

  goToCategories(): void {
    this.screen.set('CATEGORIES');
  }
}
