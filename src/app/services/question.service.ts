import { Injectable } from '@angular/core';
import { Question, QuestionCategory, QuestionDifficulty } from '../models/question.model';
import { QUESTIONS_DATA } from '../data/questions';
import { QUESTIONS_HR_DATA } from '../data/questions_hr';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private allQuestions: Question[] = QUESTIONS_DATA;
  private allHrQuestions: Question[] = QUESTIONS_HR_DATA;

  // Registro de IDs recientemente mostrados para evitar repeticiones consecutivas
  private recentStandardIds = new Set<number>();
  private recentHrIds = new Set<number>();

  getQuestionsForLevel(level: number, count: number = 10): Question[] {
    let filtered = this.allQuestions.filter(q => q.level === level);
    if (filtered.length < count) {
      filtered = this.allQuestions.filter(q => Math.abs(q.level - level) <= 1);
    }
    return this.shuffleAndPrepareQuestions(filtered).slice(0, count);
  }

  getQuestionsByCategory(category: QuestionCategory, count: number = 10): Question[] {
    const filtered = this.allQuestions.filter(q => q.category === category);
    return this.shuffleAndPrepareQuestions(filtered).slice(0, count);
  }

  getRandomGamePool(totalCount: number = 20): Question[] {
    const uniqueList = this.deduplicateUniqueQuestions([...this.allQuestions]);
    
    // Priorizar preguntas que no han salido en las partidas recientes
    const unseen = uniqueList.filter(q => !this.recentStandardIds.has(q.id));
    let selected: Question[];

    if (unseen.length >= totalCount) {
      selected = this.shuffleArray(unseen).slice(0, totalCount);
    } else {
      // Si quedan pocas preguntas sin ver, reiniciamos el registro y tomamos del pool completo
      this.recentStandardIds.clear();
      selected = this.shuffleArray(uniqueList).slice(0, totalCount);
    }

    // Registrar las preguntas seleccionadas
    selected.forEach(q => this.recentStandardIds.add(q.id));

    return this.prepareQuestionOptions(selected);
  }

  /**
   * Obtiene las preguntas de Recursos Humanos garantizando 100% que NO se repitan
   * en la partida actual y priorizando preguntas no vistas entre partidas.
   */
  getHrQuestions(difficulty?: QuestionDifficulty | 'all', level?: number): Question[] {
    let pool = [...this.allHrQuestions];
    if (difficulty && difficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === difficulty);
    }
    if (level && level > 0) {
      pool = pool.filter(q => q.level === level);
    }

    const uniquePool = this.deduplicateUniqueQuestions(pool);

    // Priorizar preguntas no vistas recientemente
    const unseen = uniquePool.filter(q => !this.recentHrIds.has(q.id));
    const seen = uniquePool.filter(q => this.recentHrIds.has(q.id));

    let orderedPool: Question[];
    if (unseen.length >= Math.min(10, uniquePool.length)) {
      orderedPool = [...this.shuffleArray(unseen), ...this.shuffleArray(seen)];
    } else {
      // Reiniciar ciclo si ya se vieron casi todas las preguntas del banco
      this.recentHrIds.clear();
      orderedPool = this.shuffleArray(uniquePool);
    }

    // Registrar en el historial de vistas
    orderedPool.slice(0, 25).forEach(q => this.recentHrIds.add(q.id));

    return this.prepareQuestionOptions(orderedPool);
  }

  getAllHrQuestions(): Question[] {
    return [...this.allHrQuestions];
  }

  /**
   * Baraja las opciones de cada pregunta asegurando que la respuesta correcta
   * quede siempre actualizada con su nuevo índice aleatorio.
   */
  private prepareQuestionOptions(questions: Question[]): Question[] {
    return questions.map(q => {
      const originalOptions = [...q.options];
      const correctText = originalOptions[q.correctAnswer];
      
      const shuffledOptions = this.shuffleArray(originalOptions);
      const newCorrectIndex = shuffledOptions.indexOf(correctText);

      return {
        ...q,
        options: shuffledOptions,
        correctAnswer: newCorrectIndex
      };
    });
  }

  private shuffleAndPrepareQuestions(questions: Question[]): Question[] {
    const uniqueQuestions = this.deduplicateUniqueQuestions(questions);
    const shuffledQuestions = this.shuffleArray([...uniqueQuestions]);
    return this.prepareQuestionOptions(shuffledQuestions);
  }

  private deduplicateUniqueQuestions(questions: Question[]): Question[] {
    const seenText = new Set<string>();
    const seenIds = new Set<number>();
    const result: Question[] = [];

    for (const q of questions) {
      const textKey = (q.question || '').trim().toLowerCase();
      if (!seenText.has(textKey) && !seenIds.has(q.id)) {
        seenText.add(textKey);
        seenIds.add(q.id);
        result.push(q);
      }
    }
    return result;
  }

  private shuffleArray<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}
