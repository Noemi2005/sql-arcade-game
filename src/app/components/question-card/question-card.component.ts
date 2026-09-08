import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="question" class="w-full arcade-card p-6 md:p-8 mb-6 text-left space-y-5">
      
      <!-- Top Badges -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
        
        <!-- Category Badge -->
        <span class="px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-title font-extrabold tracking-wider bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          🏷️ {{ question.categoryLabel }}
        </span>

        <!-- Difficulty & Question Number Badge -->
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-lg text-xs font-title font-bold uppercase tracking-wider shadow-sm"
                [ngClass]="{
                  'bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(0,255,102,0.2)]': question.difficulty === 'medium',
                  'bg-amber-950/90 border border-amber-500/50 text-amber-300 shadow-[0_0_10px_rgba(255,230,0,0.2)]': question.difficulty === 'hard',
                  'bg-pink-950/90 border border-pink-500/50 text-pink-300 shadow-[0_0_10px_rgba(255,0,85,0.2)]': question.difficulty === 'expert'
                }">
            {{ question.difficulty === 'medium' ? 'MEDIO' : question.difficulty === 'hard' ? 'DIFÍCIL' : 'EXPERTO' }}
          </span>

          <span class="text-xs md:text-sm font-arcade text-slate-400">
            #{{ questionIndex + 1 }}
          </span>
        </div>
      </div>

      <!-- Question Text -->
      <h2 class="text-xl md:text-2xl font-title font-extrabold text-slate-100 leading-relaxed tracking-wide">
        {{ question.question }}
      </h2>

      <!-- Code Snippet Display -->
      <div *ngIf="question.code" class="sql-code-block relative group my-4">
        <div class="absolute top-3 right-4 text-[10px] sm:text-xs font-arcade text-slate-400 uppercase tracking-widest pointer-events-none bg-slate-900/90 px-2 py-1 rounded border border-slate-700">
          ESQUEMA SQL DDL
        </div>
        <pre class="font-code text-sm md:text-base text-cyan-200 leading-relaxed overflow-x-auto whitespace-pre-wrap pt-2">{{ question.code }}</pre>
      </div>

    </div>
  `
})
export class QuestionCardComponent {
  @Input() question: Question | null = null;
  @Input() questionIndex: number = 0;
}

