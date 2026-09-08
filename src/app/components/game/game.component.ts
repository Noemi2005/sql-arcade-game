import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { GameHudComponent } from '../game-hud/game-hud.component';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { AnswerOptionComponent } from '../answer-option/answer-option.component';
import { FeedbackComponent } from '../feedback/feedback.component';

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
    if (confirm('¿Estás seguro de que deseas abandonar la partida actual? Perderás tu progreso de esta partida.')) {
      this.gameService.goToHome();
    }
  }
}
