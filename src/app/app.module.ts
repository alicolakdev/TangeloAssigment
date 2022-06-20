import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailComponent,
    PlanetDetailComponent,
    PlanetListComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
