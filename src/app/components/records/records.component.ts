import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { StorageService } from '../../services/storage.service';
import { LocalRecords } from '../../models/game-state.model';

declare const Swal: any;

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
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: '🗑️ ¿REINICIAR RÉCORDS?',
        text: '¿Estás seguro de que deseas borrar todas tus puntuaciones y estadísticas locales?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'SÍ, REINICIAR',
        cancelButtonText: 'CANCELAR',
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
          this.storageService.resetRecords();
          this.loadRecords();
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'RÉCORDS REINICIADOS',
            showConfirmButton: false,
            timer: 2500,
            customClass: {
              popup: 'arcade-swal-popup border-emerald-500',
              title: 'arcade-swal-title'
            }
          });
        }
      });
    } else {
      if (confirm('¿Estás seguro de que deseas reiniciar todos tus récords locales?')) {
        this.storageService.resetRecords();
        this.loadRecords();
      }
    }
  }
}
