import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player } from '../../player';

@Component({
  selector: 'app-score-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.css']
})
export class ScoreInputComponent {
  @Input() players: Player[]|null = null;
  @Input() round: number|null = 0;
  @Input() gameOver: boolean|null = false;

  @Output() nextRound = new EventEmitter<any>();
  @Output() pointsChanged = new EventEmitter<Player>();
}
