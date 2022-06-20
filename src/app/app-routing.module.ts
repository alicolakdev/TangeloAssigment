import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { CharacterDTO } from './models/character-model';

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  },
  {
    path: 'character/:id',
    data: {character: {} as CharacterDTO},
    component: CharacterDetailComponent
  },
  {
    path: 'filmdetail/:id',
    component: FilmDetailComponent
  },
  {
    path: 'planets',
    component: PlanetListComponent
  },
  {
    path: 'planet/:id',
    component: PlanetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
