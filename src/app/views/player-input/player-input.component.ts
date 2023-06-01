import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent {

  name = new FormControl('');
  @Output() addPlayer = new EventEmitter<string>();
  constructor() {
    
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.addPlayer.emit(name);
  }
}
