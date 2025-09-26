import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../player';

@Component({
  selector: 'app-score-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent {
  @Input() players: Player[]|null = null;
  @Input() gameOver: boolean|null = false;
}
