import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterDTO } from 'src/app/models/character-model';
import { PlanetDTO } from 'src/app/models/planet-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  planetDetail: PlanetDTO = {} as PlanetDTO;
  planetId: number = 1;
  characterList: Array<CharacterDTO> = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.planetId = params['id']
      this.getPlanetDetail(this.planetId);
    })
  }

  getPlanetDetail(id: number) {
    this.apiService.getPlanetDetail(id).subscribe((data) => {
      this.planetDetail = data;
      // this.planetDetail.characters.forEach(character => {
      //   this.getCharacters(character);
      // });
    })
  }

  // getCharacters(characterURL: string) {
  //   this.apiService.getCharacterDetail(characterURL).subscribe((data) => {
  //     this.characterList.push(data)
  //   })
  // }

  // getCharacterId(url: string) {
  //   let stringArray = url.split('/')
  //   return stringArray[stringArray.length - 2];
  // }
}
