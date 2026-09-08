import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { StorageService } from '../../services/storage.service';
import { LocalRecords } from '../../models/game-state.model';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './records.component.html'
})
export class RecordsComponent {
  records = signal<LocalRecords>({
    highScore: 0,
    bestStreak: 0,
    highestLevel: 1,
    gamesPlayed: 0,
    totalCorrect: 0
  });

  constructor(
    public gameService: GameService,
    private storageService: StorageService
  ) {
    this.loadRecords();
  }

  loadRecords(): void {
    this.records.set(this.storageService.getRecords());
  }

  resetRecords(): void {
    if (confirm('¿Estás seguro de que deseas reiniciar todos tus récords locales?')) {
      this.storageService.resetRecords();
      this.loadRecords();
    }
  }
}
