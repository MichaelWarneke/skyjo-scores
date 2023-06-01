import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
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
