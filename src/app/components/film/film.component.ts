import { Component, OnInit, Input } from '@angular/core';

import { FilmService } from './../../services/film.service';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit {

  @Input()
  film: IMovie;

  constructor(private fs: FilmService) { }

  ngOnInit() {
  }

  changeStatus(event: any, film: IMovie) {
    event.stopPropagation();

    // add or remove item to/from localStorage; cange "liked" flag on film component
    const filmArr = JSON.parse(this.fs.favorites);
    if (filmArr.find(item => item.id == film.id)) {
      this.film.isFavorite = false;
      this.fs.removeFavorite(film);
    } else {
      this.film.isFavorite = true;
      this.fs.addFavorite(film);
    }
  }
}
