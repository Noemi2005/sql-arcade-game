import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { GameHudComponent } from '../game-hud/game-hud.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { QuestionDifficulty } from '../../models/question.model';

declare const Swal: any;

@Component({
  selector: 'app-hr-game',
  standalone: true,
  imports: [
    CommonModule,
    GameHudComponent,
    FeedbackComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-start py-5 px-3 sm:px-6 md:px-8 relative z-10 max-w-[1300px] mx-auto space-y-4 select-none">
      
      <!-- Top Action Bar -->
      <div class="w-full flex flex-wrap justify-between items-center gap-3 mb-1">
        <button 
          (click)="confirmQuit()" 
          class="text-xs sm:text-sm font-title bg-[#080614]/90 border border-slate-800 hover:border-[#ff007a]/60 px-4 py-2 rounded-xl text-slate-400 hover:text-[#ff007a] transition-all flex items-center gap-2 cursor-pointer shadow-md">
          <span>🚪 ABANDONAR PARTIDA</span>
        </button>

        <!-- Selector de Dificultad para HR -->
        <div class="flex items-center gap-1.5 sm:gap-2 bg-[#080614]/90 border border-slate-800 p-1 rounded-xl text-xs font-title">
          <span class="text-slate-400 hidden sm:inline px-2">DIFICULTAD:</span>
          <button 
            *ngFor="let diff of difficulties"
            (click)="changeDifficulty(diff.id)"
            class="px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold tracking-wider"
            [ngClass]="gameService.hrDifficulty() === diff.id 
              ? 'bg-[#00f0ff] text-slate-950 shadow-[0_0_10px_rgba(0,240,255,0.4)]' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'">
            {{ diff.label }}
          </button>
        </div>

        <div class="text-xs sm:text-sm font-arcade text-[#00f0ff] tracking-wider glow-text-cyan bg-[#04030a]/90 px-4 py-2 rounded-xl border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          PREGUNTA {{ gameService.currentIndex() + 1 }} / {{ gameService.questions().length }}
        </div>
      </div>

      <!-- HUD Header -->
      <app-game-hud class="w-full"></app-game-hud>

      <!-- Main Layout: LADO IZQUIERDO (Pregunta + Esquema) | LADO DERECHO (Respuestas con 3 LEDs + Feedback) -->
      <div *ngIf="gameService.currentQuestion() as q" class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        <!-- ======================================================== -->
        <!-- LADO IZQUIERDO: PREGUNTA Y ESQUEMA RELACIONAL BD HR      -->
        <!-- ======================================================== -->
        <div class="w-full flex flex-col space-y-4">
          
          <!-- 1. Card de la Pregunta -->
          <div class="w-full arcade-card p-4 sm:p-5 text-left space-y-3">
            
            <!-- Badges Superiores -->
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-lg text-xs font-title font-extrabold tracking-wider bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(0,255,102,0.2)] flex items-center gap-1.5">
                <span>💼</span> {{ q.categoryLabel || 'BD RECURSOS HUMANOS' }}
              </span>

              <div class="flex items-center gap-2.5">
                <span class="px-2.5 py-0.5 rounded-lg text-xs font-title font-bold uppercase tracking-wider"
                      [ngClass]="{
                        'bg-emerald-950/90 border border-emerald-500/50 text-emerald-300': q.difficulty === 'easy',
                        'bg-cyan-950/90 border border-cyan-500/50 text-cyan-300': q.difficulty === 'medium',
                        'bg-amber-950/90 border border-amber-500/50 text-amber-300': q.difficulty === 'hard',
                        'bg-pink-950/90 border border-pink-500/50 text-pink-300': q.difficulty === 'expert'
                      }">
                  {{ q.difficulty === 'easy' ? 'FÁCIL' : q.difficulty === 'medium' ? 'MEDIO' : q.difficulty === 'hard' ? 'DIFÍCIL' : 'EXPERTO' }}
                </span>

                <span class="text-xs font-arcade text-slate-400">
                  #{{ gameService.currentIndex() + 1 }}
                </span>
              </div>
            </div>

            <!-- Enunciado de la Pregunta -->
            <h2 class="text-base sm:text-lg md:text-xl font-title font-extrabold text-slate-100 leading-snug tracking-wide">
              {{ q.question }}
            </h2>

            <!-- Bloque de Código SQL / Contexto (Compacto) -->
            <div *ngIf="q.code" class="w-full rounded-xl border border-cyan-500/35 bg-[#060913] overflow-hidden my-2 shadow-[0_0_15px_rgba(0,240,255,0.06)]">
              <div class="flex items-center justify-between px-3 py-1 bg-[#0d1326] border-b border-cyan-500/20 select-none">
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-pink-500/80"></span>
                  <span class="w-2 h-2 rounded-full bg-amber-500/80"></span>
                  <span class="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                </div>
                <span class="text-[9px] sm:text-[10px] font-title font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  SQL QUERY / CONTEXTO
                </span>
              </div>
              <pre class="font-code text-xs text-cyan-200 leading-relaxed p-3 overflow-x-auto whitespace-pre-wrap">{{ q.code }}</pre>
            </div>

          </div>

          <!-- 2. Card del Esquema Relacional de la BD HR -->
          <div class="w-full arcade-card p-3 sm:p-4 flex flex-col justify-between items-center text-center border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.08)]">
            
            <!-- Cabecera de la Pantalla de la Tabla -->
            <div class="w-full flex items-center justify-between pb-2 border-b border-cyan-500/25 select-none">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#00ff9c] animate-led-blink"></span>
                <span class="font-arcade text-[11px] text-[#00f0ff] tracking-wider glow-text-cyan">
                  📊 ESQUEMA RELACIONAL HR
                </span>
              </div>

              <button 
                (click)="openZoom()" 
                class="flex items-center gap-1 text-[10px] sm:text-xs font-title bg-cyan-950/70 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 hover:text-white px-2.5 py-1 rounded-lg transition-all cursor-pointer shadow-sm">
                <span>🔍 AMPLIAR</span>
              </button>
            </div>

            <!-- Contenedor de la Imagen con zoom interactivo -->
            <div 
              (click)="openZoom()"
              class="relative w-full my-2.5 p-2 bg-[#04020a] rounded-xl border border-slate-800 hover:border-cyan-500/60 transition-all cursor-zoom-in group overflow-hidden flex items-center justify-center min-h-[220px] max-h-[320px]">
              <img 
                [src]="tableImageUrl" 
                [alt]="q.imageAlt || 'Diagrama Relacional BD Recursos Humanos'"
                class="w-auto h-full max-h-[305px] max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_14px_rgba(0,240,255,0.16)]"
              />
              
              <div class="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span class="bg-[#080614]/90 border border-cyan-400 text-cyan-300 px-3 py-1.5 rounded-xl font-arcade text-[10px] tracking-wider shadow-lg">
                  🔍 CLIC PARA AMPLIAR
                </span>
              </div>
            </div>

            <!-- Pie del Visor de Tabla -->
            <div class="w-full flex items-center justify-between text-[10px] font-code text-slate-400 pt-1.5 border-t border-slate-800/80">
              <span>Tablas: EMPLOYEES, DEPARTMENTS, JOBS, LOCATIONS...</span>
              <span class="text-cyan-400 font-arcade text-[9px]">ORACLE HR</span>
            </div>

          </div>

        </div>

        <!-- ======================================================== -->
        <!-- LADO DERECHO: LAS RESPUESTAS (CARDS CON 3 LEDS) + FEEDBACK-->
        <!-- ======================================================== -->
        <div class="w-full flex flex-col space-y-3.5 pt-0 lg:pt-[185px]">
          
          <!-- Encabezado de la columna de opciones -->
          <div class="w-full flex items-center justify-between px-2 text-xs font-title text-slate-300">
            <span class="flex items-center gap-1.5 text-cyan-400 font-arcade text-[10px]">
              <span>🎯</span> SELECCIONA LA CONSULTA CORRECTA:
            </span>
            <span class="text-[11px] text-slate-400 font-mono hidden sm:inline">
              Teclas [A, B, C, D] o [1, 2, 3, 4]
            </span>
          </div>

          <!-- Cards de las 4 opciones estilo Terminal con 3 LEDs -->
          <div class="w-full grid grid-cols-1 gap-3">
            <div 
              *ngFor="let option of q.options; let i = index"
              (click)="selectOption(i)"
              class="w-full rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer select-none group text-left shadow-sm"
              [ngClass]="{
                'border-emerald-400 bg-[#041212] shadow-[0_0_15px_rgba(0,255,102,0.35)]': gameService.isAnswerSubmitted() && i === q.correctAnswer,
                'border-pink-500 bg-[#160412] shadow-[0_0_15px_rgba(255,0,85,0.35)]': gameService.isAnswerSubmitted() && gameService.selectedOption() === i && i !== q.correctAnswer,
                'opacity-35 cursor-not-allowed border-slate-800 bg-[#060913]': gameService.isAnswerSubmitted() && i !== q.correctAnswer && gameService.selectedOption() !== i,
                'border-cyan-500/35 bg-[#060913] hover:border-cyan-400 hover:shadow-[0_0_14px_rgba(0,240,255,0.25)] hover:bg-[#091024]': !gameService.isAnswerSubmitted()
              }">
              
              <!-- Terminal Header Bar con 3 Puntos LED y Tag de Opción -->
              <div class="flex items-center justify-between px-3.5 py-1.5 bg-[#0d1326] border-b border-cyan-500/20 select-none">
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-pink-500/90 shadow-[0_0_6px_rgba(255,0,122,0.8)]"></span>
                  <span class="w-2 h-2 rounded-full bg-amber-400/90 shadow-[0_0_6px_rgba(255,230,0,0.8)]"></span>
                  <span class="w-2 h-2 rounded-full bg-emerald-400/90 shadow-[0_0_6px_rgba(0,255,156,0.8)]"></span>
                </div>

                <div class="flex items-center gap-2">
                  <span *ngIf="gameService.isAnswerSubmitted() && i === q.correctAnswer" class="text-[10px] font-arcade text-emerald-400 glow-text-green font-bold">
                    CORRECTA ✓
                  </span>
                  <span *ngIf="gameService.isAnswerSubmitted() && gameService.selectedOption() === i && i !== q.correctAnswer" class="text-[10px] font-arcade text-pink-400 glow-text-pink font-bold">
                    INCORRECTA ✕
                  </span>
                  <span class="text-[10px] font-title font-bold text-cyan-300 uppercase tracking-widest bg-cyan-950/70 px-2.5 py-0.5 rounded border border-cyan-500/30 group-hover:border-cyan-400 group-hover:text-white transition-colors">
                    OPCIÓN {{ ['A', 'B', 'C', 'D'][i] }}
                  </span>
                </div>
              </div>

              <!-- Cuerpo con la consulta SQL completa -->
              <div class="p-3 sm:p-3.5 flex items-start gap-2.5">
                <code class="font-code text-xs sm:text-[13px] text-cyan-100 flex-1 leading-relaxed break-words">
                  {{ option }}
                </code>
              </div>

            </div>
          </div>

          <!-- Feedback técnico y botón de avance [ENTER] a la derecha -->
          <app-feedback></app-feedback>

        </div>

      </div>

      <!-- ============================================ -->
      <!-- MODAL DE ZOOM FULLSCREEN DE LA TABLA BD HR   -->
      <!-- ============================================ -->
      <div 
        *ngIf="isZoomOpen()" 
        (click)="closeZoom()"
        class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn cursor-zoom-out select-none">
        
        <div 
          (click)="$event.stopPropagation()"
          class="arcade-stage max-w-6xl w-full p-4 sm:p-6 text-center relative max-h-[95vh] overflow-hidden flex flex-col items-center rounded-3xl border-[#00f0ff]/60 shadow-[0_0_40px_rgba(0,240,255,0.3)]">
          
          <!-- Botón de Cerrar -->
          <button 
            (click)="closeZoom()" 
            class="absolute top-4 right-4 bg-[#080614] border border-[#ff007a]/60 hover:border-[#ff007a] text-[#ff007a] hover:text-white rounded-xl w-10 h-10 flex items-center justify-center font-title text-xl cursor-pointer transition-all z-20 shadow-lg">
            ✕
          </button>

          <!-- Título del Modal -->
          <div class="flex items-center gap-3 pb-3 mb-2 border-b border-slate-800 w-full text-left">
            <span class="text-2xl">📊</span>
            <div>
              <h2 class="text-lg sm:text-xl font-title font-bold text-white glow-text-cyan">
                ESQUEMA RELACIONAL COMPLETO — RECURSOS HUMANOS (HR)
              </h2>
              <p class="text-xs font-code text-[#00ff9c]">
                Consulta todas las claves primarias (PK), foráneas (FK) y columnas
              </p>
            </div>
          </div>

          <!-- Imagen en Alta Resolución -->
          <div class="w-full flex-grow overflow-auto p-2 bg-[#04020a] rounded-2xl border border-slate-800 flex items-center justify-center max-h-[75vh]">
            <img 
              [src]="tableImageUrl" 
              alt="Esquema Relacional BD Recursos Humanos Full Resolution" 
              class="max-w-full max-h-full object-contain rounded-lg filter drop-shadow-xl"
            />
          </div>

          <!-- Botón para Salir del Zoom -->
          <div class="pt-3 w-full flex justify-between items-center text-xs font-title text-slate-400">
            <span>Presiona <kbd class="px-2 py-0.5 bg-slate-800 rounded text-cyan-300 font-mono">ESC</kbd> o clic afuera para cerrar</span>
            <button 
              (click)="closeZoom()" 
              class="arcade-btn px-6 py-2 text-xs">
              <span>CERRAR ZOOM</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  `
})
export class HrGameComponent implements OnInit {
  tableImageUrl = 'bd_hr.png';
  isZoomOpen = signal<boolean>(false);

  difficulties: { id: QuestionDifficulty | 'all'; label: string }[] = [
    { id: 'all', label: 'TODAS' },
    { id: 'easy', label: 'FÁCIL' },
    { id: 'medium', label: 'MEDIO' },
    { id: 'hard', label: 'DIFÍCIL' },
    { id: 'expert', label: 'EXPERTO' }
  ];

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    if (this.gameService.questions().length === 0 || this.gameService.gameMode() !== 'HR') {
      this.gameService.startHrGame('all');
    }
  }

  changeDifficulty(difficulty: QuestionDifficulty | 'all'): void {
    this.gameService.startHrGame(difficulty);
  }

  selectOption(index: number): void {
    if (!this.gameService.isAnswerSubmitted()) {
      this.gameService.selectOption(index);
    }
  }

  openZoom(): void {
    this.isZoomOpen.set(true);
  }

  closeZoom(): void {
    this.isZoomOpen.set(false);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isZoomOpen()) {
      this.closeZoom();
      return;
    }

    if (!this.gameService.isAnswerSubmitted()) {
      const key = event.key.toUpperCase();
      const currentQ = this.gameService.currentQuestion();
      if (!currentQ) return;
      if (['A', '1'].includes(key) && currentQ.options.length > 0) this.selectOption(0);
      if (['B', '2'].includes(key) && currentQ.options.length > 1) this.selectOption(1);
      if (['C', '3'].includes(key) && currentQ.options.length > 2) this.selectOption(2);
      if (['D', '4'].includes(key) && currentQ.options.length > 3) this.selectOption(3);
    }
  }

  confirmQuit(): void {
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: '⚠️ ¿ABANDONAR PARTIDA?',
        text: '¿Estás seguro de que deseas salir del modo BD Recursos Humanos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'SÍ, ABANDONAR',
        cancelButtonText: 'CONTINUAR JUGANDO',
        customClass: {
          popup: 'arcade-swal-popup',
          title: 'arcade-swal-title',
          htmlContainer: 'arcade-swal-text',
          confirmButton: 'arcade-swal-confirm-btn',
          cancelButton: 'arcade-swal-cancel-btn'
        },
        buttonsStyling: false
      }).then((result: any) => {
        if (result.isConfirmed) {
          this.gameService.goToHome();
        }
      });
    } else {
      if (confirm('¿Deseas salir del modo BD Recursos Humanos?')) {
        this.gameService.goToHome();
      }
    }
  }
}
