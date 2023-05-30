import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyjo-scores';
  gameStarted: boolean = true;
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
