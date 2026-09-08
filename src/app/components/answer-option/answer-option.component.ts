import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer-option',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full grid grid-cols-1 gap-4 mb-6">
      <button 
        *ngFor="let option of options; let i = index"
        (click)="onSelect(i)"
        [disabled]="isSubmitted"
        class="option-btn group select-none cursor-pointer p-4 md:p-5 text-left leading-relaxed transition-all duration-200"
        [ngClass]="{
          'selected-correct border-emerald-400 bg-emerald-950/40 text-emerald-100 shadow-[0_0_20px_rgba(0,255,102,0.4)]': isSubmitted && i === correctAnswer,
          'selected-wrong border-pink-500 bg-pink-950/40 text-pink-100 shadow-[0_0_20px_rgba(255,0,85,0.4)]': isSubmitted && selectedOption === i && i !== correctAnswer,
          'opacity-40 cursor-not-allowed': isSubmitted && i !== correctAnswer && selectedOption !== i
        }">
        
        <!-- Key Letter Badge A, B, C, D -->
        <span class="option-key group-hover:border-cyan-400 group-hover:text-cyan-300 font-arcade text-xs md:text-sm px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/80 text-cyan-400">
          {{ getOptionLetter(i) }}
        </span>

        <!-- Option Text -->
        <span class="flex-1 font-body text-base md:text-lg font-medium text-slate-100 leading-relaxed">
          {{ option }}
        </span>

        <!-- Correct / Wrong Icon Badge -->
        <span *ngIf="isSubmitted && i === correctAnswer" class="text-emerald-400 font-bold text-xl glow-text-green">✓</span>
        <span *ngIf="isSubmitted && selectedOption === i && i !== correctAnswer" class="text-pink-500 font-bold text-xl glow-text-pink">✕</span>

      </button>
    </div>
  `
})
export class AnswerOptionComponent {
  @Input() options: string[] = [];
  @Input() selectedOption: number | null = null;
  @Input() correctAnswer: number = 0;
  @Input() isSubmitted: boolean = false;
  
  @Output() optionSelected = new EventEmitter<number>();

  getOptionLetter(index: number): string {
    return ['A', 'B', 'C', 'D'][index] || `${index + 1}`;
  }

  onSelect(index: number): void {
    if (!this.isSubmitted) {
      this.optionSelected.emit(index);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.isSubmitted) return;

    const key = event.key.toUpperCase();
    if (['A', '1'].includes(key) && this.options.length > 0) this.onSelect(0);
    if (['B', '2'].includes(key) && this.options.length > 1) this.onSelect(1);
    if (['C', '3'].includes(key) && this.options.length > 2) this.onSelect(2);
    if (['D', '4'].includes(key) && this.options.length > 3) this.onSelect(3);
  }
}

