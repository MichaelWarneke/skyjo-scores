import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, PlayerComponent, GameComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skyjo-scores';
  gameStarted: boolean = false;
  gameEnded: boolean = false;
  isDarkTheme: boolean = false;

  startGame() {
    this.gameStarted = true;
    this.gameEnded = false;
  }

  newGame() {
    this.gameStarted = false;
    this.gameEnded = true;
  }
}
