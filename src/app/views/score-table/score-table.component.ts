import { Component, Input } from '@angular/core';
import { Player } from '../../player';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss']
})
export class ScoreTableComponent {
  @Input() players: Player[]|null = null;
  @Input() gameOver: boolean|null = false;
}
