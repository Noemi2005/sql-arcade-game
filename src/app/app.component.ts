import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { CrtOverlayComponent } from './components/crt-overlay/crt-overlay.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { RecordsComponent } from './components/records/records.component';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CrtOverlayComponent,
    HomeComponent,
    GameComponent,
    GameOverComponent,
    RecordsComponent,
    CategoriesComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SQL DDL ARCADE';

  constructor(public gameService: GameService) {}
}
