import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PlayerListComponent } from '../views/player-list/player-list.component';
import { PlayerInputComponent } from '../views/player-input/player-input.component';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, AsyncPipe, PlayerListComponent, PlayerInputComponent],
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
      // Optionally handle no players case
    }
  }
}
