import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { PlayerInputComponent } from './views/player-input/player-input.component';
import { ScoreInputComponent } from './views/score-input/score-input.component';
import { PlayerListComponent } from './views/player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';
import { ScoreTableComponent } from './views/score-table/score-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './views/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerInputComponent,
    ScoreInputComponent,
    PlayerListComponent,
    PlayerComponent,
    GameComponent,
    ScoreTableComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    BrowserAnimationsModule
  ],
  providers: [
//    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
