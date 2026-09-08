import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { SoundService } from '../../services/sound.service';
import { StorageService } from '../../services/storage.service';
import { LocalRecords } from '../../models/game-state.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  showHowToPlay = signal<boolean>(false);
  crtEnabled = signal<boolean>(true);
  records = signal<LocalRecords>({
    highScore: 0,
    bestStreak: 0,
    highestLevel: 1,
    gamesPlayed: 0,
    totalCorrect: 0
  });

  constructor(
    public gameService: GameService,
    public soundService: SoundService,
    private storageService: StorageService
  ) {
    this.records.set(this.storageService.getRecords());
  }

  toggleSound(): void {
    this.soundService.toggleSound();
  }

  toggleCrt(): void {
    this.crtEnabled.update(v => !v);
  }

  openHowToPlay(): void {
    this.soundService.playCoin();
    this.showHowToPlay.set(true);
  }

  closeHowToPlay(): void {
    this.showHowToPlay.set(false);
  }

  padScore(score: number): string {
    return score.toString().padStart(6, '0');
  }
}
