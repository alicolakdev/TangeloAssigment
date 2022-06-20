import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterDTO } from 'src/app/models/character-model';
import { PlanetDTO } from 'src/app/models/planet-model';
import { ApiService } from 'src/app/services/api.service';
import { environment as env } from 'src/environments/environment'

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterDetail: CharacterDTO = {} as CharacterDTO;
  characterId: number = 1;
  planet: PlanetDTO = {} as PlanetDTO;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.characterId = params['id']
      this.getCharacterDetail(this.characterId);
    })
  }

  getCharacterDetail(characterId: number) {
    this.apiService.getCharacterDetail(`${env.BASE_URL}/people/${characterId}`).subscribe((data) => {
      this.characterDetail =data;
      let planetId =this.getPlanetId(data.homeworld);
      if(planetId != undefined) this.apiService.getPlanetDetail(+planetId).subscribe((planetInfo) => {
        this.planet= planetInfo;
      })
    })
  }

  getPlanetId(url: string) {
    let stringArray = url.split('/');
    return stringArray[stringArray.length - 2];
  }
}
