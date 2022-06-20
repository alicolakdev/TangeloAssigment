import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse } from 'src/app/models/api-model';
import { PlanetDTO } from 'src/app/models/planet-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planetList: APIResponse<PlanetDTO> = ({} as any) as APIResponse<PlanetDTO>;
  page: number = 1;
  count: number = 0;
  totalPage: number = 1;
  tableSize: any = [3, 6, 9, 12];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getPlanetList(this.page);
  }

  getPlanetList(page: number) {
    this.apiService.getPlanetList(page).subscribe((data) => {
      this.planetList = data;
      this.totalPage = this.calculateTotalPage(this.planetList.count);
      this.page = page;
      this.planetList.results.forEach(planet => {
      });
    })
  }

  calculateTotalPage(count: number) {
    if (count < 10) {
      return 1;
    }
    var remainder = count % 10;
    return remainder == 0 ? count / 10 : Math.floor(count / 10) + 1;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getPlanetList(this.page);
  }

  getPlanetId(url: string) {
    let stringArray = url.split('/');
    return stringArray[stringArray.length - 2];
  }
}
