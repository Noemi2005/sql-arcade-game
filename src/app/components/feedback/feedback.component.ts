import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="gameService.isAnswerSubmitted() && gameService.currentQuestion() as q" 
         class="w-full arcade-card p-6 md:p-8 mb-6 text-left space-y-6 transition-all duration-300"
         [ngClass]="{
           'arcade-card-green': gameService.lastAnswerCorrect(),
           'arcade-card-pink': !gameService.lastAnswerCorrect()
         }">
      
      <!-- Result Banner -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        
        <div class="flex items-center gap-3">
          <span *ngIf="gameService.lastAnswerCorrect()" class="text-emerald-400 font-arcade text-lg md:text-2xl glow-text-green tracking-wider">
            ✓ ¡RESPUESTA CORRECTA!
          </span>
          <span *ngIf="!gameService.lastAnswerCorrect() && gameService.selectedOption() !== -1" class="text-pink-500 font-arcade text-lg md:text-2xl glow-text-pink tracking-wider">
            ✕ RESPUESTA INCORRECTA
          </span>
          <span *ngIf="!gameService.lastAnswerCorrect() && gameService.selectedOption() === -1" class="text-amber-400 font-arcade text-lg md:text-2xl glow-text-yellow tracking-wider">
            ⏱️ ¡TIEMPO AGOTADO!
          </span>
        </div>

        <!-- Score Breakdown Badges -->
        <div *ngIf="gameService.lastAnswerCorrect()" class="flex flex-wrap items-center gap-2.5 font-title text-xs sm:text-sm">
          <span class="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-3.5 py-1.5 rounded-lg font-extrabold shadow-[0_0_10px_rgba(0,255,102,0.2)]">
            +{{ gameService.lastPointsEarned() }} PTS
          </span>

          <span *ngIf="gameService.lastSpeedBonus() > 0" class="bg-yellow-950/80 border border-yellow-500/50 text-yellow-300 px-3.5 py-1.5 rounded-lg font-bold shadow-[0_0_10px_rgba(255,230,0,0.2)]">
            ⚡ VELOCIDAD +{{ gameService.lastSpeedBonus() }}
          </span>

          <span *ngIf="gameService.streak() >= 3" class="bg-pink-950/80 border border-pink-500/50 text-pink-300 px-3.5 py-1.5 rounded-lg font-bold shadow-[0_0_10px_rgba(255,0,85,0.2)]">
            🔥 RACHA x{{ gameService.streak() }}
          </span>
        </div>

        <div *ngIf="!gameService.lastAnswerCorrect()" class="flex items-center gap-2">
          <span class="bg-pink-950/90 border border-pink-500/50 text-pink-400 text-xs sm:text-sm px-4 py-1.5 rounded-lg font-title font-bold shadow-[0_0_12px_rgba(255,0,85,0.3)]">
            💔 VIDA PERDIDA
          </span>
        </div>
      </div>

      <!-- Technical DDL Explanation Box -->
      <div class="bg-slate-950/90 p-5 md:p-6 rounded-xl border border-slate-800/90 shadow-inner">
        <h3 class="text-xs sm:text-sm font-arcade text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <span>📚 ANÁLISIS TÉCNICO SQL DDL</span>
        </h3>
        <p class="font-body text-base md:text-lg text-slate-200 leading-relaxed font-normal">
          {{ q.explanation }}
        </p>
      </div>

      <!-- Manual Advance Action Button -->
      <div class="flex items-center justify-end pt-2">
        <button 
          (click)="gameService.nextQuestion()" 
          class="arcade-btn select-none cursor-pointer w-full sm:w-auto text-sm md:text-base py-3.5 px-8"
          [ngClass]="gameService.lastAnswerCorrect() ? 'arcade-btn-yellow' : 'arcade-btn-pink'">
          <span>
            {{ gameService.lives() <= 0 ? '🏁 VER RESULTADOS' : '➡️ ADELANTAR AHORA [ENTER]' }}
          </span>
        </button>
      </div>

    </div>
  `
})
export class FeedbackComponent {
  constructor(public gameService: GameService) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.gameService.isAnswerSubmitted() && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.gameService.nextQuestion();
    }
  }
}
