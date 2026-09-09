import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { GameHudComponent } from '../game-hud/game-hud.component';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { AnswerOptionComponent } from '../answer-option/answer-option.component';
import { FeedbackComponent } from '../feedback/feedback.component';

declare const Swal: any;

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    GameHudComponent,
    QuestionCardComponent,
    AnswerOptionComponent,
    FeedbackComponent
  ],
  templateUrl: './game.component.html'
})
export class GameComponent {
  constructor(public gameService: GameService) {}

  confirmQuit(): void {
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: '⚠️ ¿ABANDONAR PARTIDA?',
        text: '¿Estás seguro de que deseas salir? Perderás tu progreso de esta partida.',
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
      if (confirm('¿Estás seguro de que deseas abandonar la partida actual? Perderás tu progreso de esta partida.')) {
        this.gameService.goToHome();
      }
    }
  }
}
