export type QuestionCategory =
  | 'BASIC_THEORY'
  | 'CREATE_TABLE'
  | 'PRIMARY_KEY'
  | 'FOREIGN_KEY'
  | 'REFERENTIAL_ACTIONS'
  | 'CHECK_UNIQUE_DEFAULT'
  | 'NAMED_CONSTRAINTS'
  | 'ALTER_TABLE'
  | 'DROP_DEPENDENCIES'
  | 'DDL_DEBUGGER'
  | 'EXECUTION_ORDER';

export type QuestionDifficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface Question {
  id: number;
  category: QuestionCategory;
  categoryLabel: string;
  difficulty: QuestionDifficulty;
  level: number;
  title?: string;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  timeLimit?: number;
}
