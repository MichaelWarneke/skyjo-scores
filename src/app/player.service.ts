import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Player {
  name: string;
  points: number[];
  totalPoints: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersSubject = new BehaviorSubject<Player[]>([]);
  private gameOverSubject = new BehaviorSubject<boolean>(false);
  private roundSubject = new BehaviorSubject<number>(0);

  constructor() {
    this.addPlayerName("Michael");
  }

  get players$(): Observable<Player[]> {
    return this.playersSubject.asObservable().pipe(
      map((players) =>
        players.map((player) => ({
          ...player,
          totalPoints: player.points.reduce((a, b) => a + b, 0),
        }))
      )
    );
  }

  get playersSorted$(): Observable<Player[]> {
    return this.players$.pipe(
      map((players) =>
        players.sort((a, b) => b.totalPoints - a.totalPoints)
      )
    )
  }

  get gameOver$(): Observable<boolean> {
    return this.gameOverSubject.asObservable();
  }

  get round$(): Observable<number> {
    return this.roundSubject.asObservable();
  }

  addPlayer(player: Player) {
    this.playersSubject.next([...this.playersSubject.getValue(), player]);
  }

  addPlayerName(name: string) {
    this.playersSubject.next([
      ...this.playersSubject.getValue(),
      { name: name, points: [], totalPoints: 0 },
    ]);
  }

  updatePlayer(name: string, points: number[]) {
    const players = this.playersSubject.getValue();
    const playerIndex = players.findIndex((player) => player.name === name);
    if (playerIndex > -1) {
      players[playerIndex] = { ...players[playerIndex], points };
      this.playersSubject.next(players);
    }
    this.checkGameOver();
  }

  deletePlayer(name: string) {
    const players = this.playersSubject.getValue();
    const playerIndex = players.findIndex((player) => player.name === name);
    if (playerIndex > -1) {
      players.splice(playerIndex, 1);
      this.playersSubject.next(players);
    }
  }

  nextRound() {
    this.roundSubject.next(this.roundSubject.getValue() + 1);
  }

  resetGame() {
    const players = this.playersSubject.getValue();
    players.forEach((player) => (player.points = []));
    this.playersSubject.next(players);
    this.roundSubject.next(0);
    this.checkGameOver();
  }

  private checkGameOver() {
    const players = this.playersSubject.getValue();
    const isGameOver = players.some(
      (player) => player.points.reduce((a, b) => a + b, 0) >= 100
    );
    this.gameOverSubject.next(isGameOver);
  }

  hasPlayers(): boolean {
    const players = this.playersSubject.getValue();
    return players.length > 0;
  }

}


