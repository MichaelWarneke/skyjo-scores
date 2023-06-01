import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent {
  @Input() players: Player[]|null = null;
  @Output() deletePlayer = new EventEmitter<Player>();

}
