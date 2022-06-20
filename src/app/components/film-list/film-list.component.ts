import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse } from 'src/app/models/api-model';
import { FilmDTO } from 'src/app/models/film-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList: APIResponse<FilmDTO> = ({} as any) as APIResponse<FilmDTO>;
  page: number = 1;
  totalPage: number = 1;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getFilmList(1);
  }

  getFilmList(page: number) {
    this.apiService.getFilmList(page).subscribe((data) => {
      this.filmList = data;
      this.totalPage = this.calculateTotalPage(this.filmList.count);
      this.page = page;
    })
  }

  calculateTotalPage(count: number) {
    if (count < 10) {
      return 1;
    }
    var remainder = count % 10;
    return remainder == 0 ? count / 10 : Math.floor(count / 10) + 1;
  }
}
