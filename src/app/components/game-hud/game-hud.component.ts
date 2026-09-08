import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-hud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-hud.component.html'
})
export class GameHudComponent {
  heartArray = computed(() => {
    const lives = this.gameService.lives();
    return [lives >= 1, lives >= 2, lives >= 3];
  });

  timerPercentage = computed(() => {
    const remaining = this.gameService.timeRemaining();
    const limit = this.gameService.currentQuestion()?.timeLimit || 50;
    return Math.max(0, Math.min(100, (remaining / limit) * 100));
  });

  constructor(public gameService: GameService) {}
}
