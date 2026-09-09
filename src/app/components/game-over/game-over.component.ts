import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

declare const Swal: any;

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-over.component.html'
})
export class GameOverComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    if (typeof Swal !== 'undefined' && this.gameService.isNewHighScore()) {
      Swal.fire({
        title: '🏆 ¡NUEVO RÉCORD LEYENDA!',
        text: `¡Felicitaciones! Has registrado un nuevo puntaje máximo de ${this.gameService.score()} puntos.`,
        icon: 'success',
        confirmButtonText: '¡EXCELENTE!',
        customClass: {
          popup: 'arcade-swal-popup',
          title: 'arcade-swal-title',
          htmlContainer: 'arcade-swal-text',
          confirmButton: 'arcade-swal-confirm-btn'
        },
        buttonsStyling: false
      });
    }
  }
}
