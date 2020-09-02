import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';

import { FilmService } from './../../services/film.service';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-all-films-partial',
  templateUrl: './all-films-partial.component.html',
  styleUrls: ['./all-films-partial.component.scss']
})

export class AllFilmsPartialComponent implements OnInit {
  films: IMovie[];

  constructor(
    private router: Router,
    private fs: FilmService
  ) {
    this.dataConnection().subscribe(res => {

      // creating "isFavorite" flags for representation another sing if it's in favorites
      const inFavorites = JSON.parse(this.fs.favorites);
      res.response.forEach(obj => {
        if (inFavorites.find(item => item.id == obj.id)) {
          obj.isFavorite = true;
        }
      });

      this.films = res.response;
    });
  }

  ngOnInit() { }

  // creating conection with movies.json file
  private dataConnection(): Observable<AjaxResponse> {
    return ajax('../assets/movies.json');
  }

  // goto all information about film
  fullInfo(film) {
    this.router.navigate(['/films', film.id], { state: { film } });
  }
}
