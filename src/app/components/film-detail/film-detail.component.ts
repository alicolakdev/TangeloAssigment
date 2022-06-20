import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterDTO } from 'src/app/models/character-model';
import { FilmDTO } from 'src/app/models/film-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  filmDetails: FilmDTO = {} as FilmDTO;
  filmId: number = 1;
  characterList: Array<CharacterDTO> = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.filmId = params['id']
      this.getFilmDetail(this.filmId);
    })
  }

  getFilmDetail(id: number) {
    this.apiService.getFilmDetail(id).subscribe((data) => {
      this.filmDetails = data;
      this.filmDetails.characters.forEach(character => {
        this.getCharacters(character);
      });
    })
  }

  getCharacters(characterURL: string) {
    this.apiService.getCharacterDetail(characterURL).subscribe((data) => {
      this.characterList.push(data)
    })
  }

  getCharacterId(url: string) {
    let stringArray = url.split('/')
    return stringArray[stringArray.length - 2];
  }
}
