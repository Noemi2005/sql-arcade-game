import { Injectable } from '@angular/core';
import { Question, QuestionCategory } from '../models/question.model';
import { QUESTIONS_DATA } from '../data/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private allQuestions: Question[] = QUESTIONS_DATA;

  getQuestionsForLevel(level: number, count: number = 10): Question[] {
    // Filter questions for current level or adjacent levels
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
    return this.shuffleAndPrepareQuestions([...this.allQuestions]).slice(0, totalCount);
  }

  /**
   * Shuffles an array of questions, and for each question, shuffles its 4 options
   * while accurately maintaining the correct answer index!
   */
  private shuffleAndPrepareQuestions(questions: Question[]): Question[] {
    const shuffledQuestions = this.shuffleArray([...questions]);

    return shuffledQuestions.map(q => {
      const originalOptions = [...q.options];
      const correctText = originalOptions[q.correctAnswer];
      
      // Shuffle options
      const shuffledOptions = this.shuffleArray(originalOptions);
      const newCorrectIndex = shuffledOptions.indexOf(correctText);

      return {
        ...q,
        options: shuffledOptions,
        correctAnswer: newCorrectIndex
      };
    });
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
