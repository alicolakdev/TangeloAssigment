import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment'
import { APIResponse } from '../models/api-model';
import { FilmDTO } from '../models/film-model';
import { CharacterDTO } from '../models/character-model';
import { PlanetDTO } from '../models/planet-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getFilmList(page: number): Observable<APIResponse<FilmDTO>> {
    let params = new HttpParams().set('page', page);

    return this.http.get<APIResponse<FilmDTO>>(`${env.BASE_URL}/films`, {
      params: params,
    });
  }

  getFilmDetail(id: number): Observable<FilmDTO> {
    return this.http.get<FilmDTO>(`${env.BASE_URL}/films/${id}`);
  }

  getCharacterDetail(url: string): Observable<CharacterDTO> {
    return this.http.get<CharacterDTO>(url)
  }

  getPlanetList(page: number): Observable<APIResponse<PlanetDTO>> {
    let params = new HttpParams().set('page', page);

    return this.http.get<APIResponse<PlanetDTO>>(`${env.BASE_URL}/planets`, {
      params: params,
    });
  }

  getPlanetDetail(id: number): Observable<PlanetDTO> {
    return this.http.get<PlanetDTO>(`${env.BASE_URL}/planets/${id}`)
  }
}
