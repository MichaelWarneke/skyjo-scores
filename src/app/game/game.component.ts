import { Component, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  players$: Observable<Player[]>;
  playersSorted$: Observable<Player[]>;
  gameOver$: Observable<boolean>;
  round$: Observable<number>;

  @Output() newGame = new EventEmitter();

  constructor(private playerService: PlayerService) {
    this.players$ = playerService.players$;
    this.playersSorted$ = playerService.playersSorted$;
    this.gameOver$ = playerService.gameOver$;
    this.round$ = playerService.round$;
  }

  nextRound() {
    this.playerService.nextRound();
  }

  newGameBtn() {
    this.playerService.resetGame();
    this.newGame.emit();
  }

  pointsChanged(player: Player) {
    this.playerService.updatePlayer(player.name, player.points);
  }
}
