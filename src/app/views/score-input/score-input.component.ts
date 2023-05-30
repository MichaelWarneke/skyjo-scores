import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../player';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent {
  @Input() players: Player[]|null = null;
  @Input() round: number|null = 0;
  @Input() gameOver: boolean|null = false;

  @Output() nextRound = new EventEmitter<any>();
  @Output() pointsChanged = new EventEmitter<Player>();
}
