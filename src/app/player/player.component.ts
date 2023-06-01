import { Component, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  players: Observable<Player[]>;
  @Output() startGame = new EventEmitter();

  constructor(private playerService: PlayerService) {
    this.players = playerService.players$;
  }

  addPlayer(name: string): void {
    this.playerService.addPlayerName(name);
  }

  deletePlayer(player: Player): void {
    this.playerService.deletePlayer(player.name);
  }

  start() {
    if(this.playerService.hasPlayers()) {
      this.startGame.emit();
    } else {
      
    }
    
  }
}
