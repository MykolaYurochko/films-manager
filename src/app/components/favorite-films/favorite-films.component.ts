import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilmService } from './../../services/film.service';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.scss']
})

export class FavoriteFilmsComponent implements OnInit {

  films: IMovie[];
  totalPrice: number;

  constructor(
    private router: Router,
    private fs: FilmService
  ) { }

  ngOnInit() {
    this.fs.favoritesValue.subscribe(val => {
      const allFavorites = JSON.parse(val)
      this.films = allFavorites;

      // totalSum counting 
      let summ = 0;
      allFavorites.forEach((el) => {
        summ += el.price;
      });
      this.totalPrice = summ;
    });
  }

  // creating new action for all favorites removing
  clearList() {
    this.fs.clearList();
  }

  // creating url for single film component
  fullInfo(film) {
    this.router.navigate(['/favorites', film.id], { state: { film } });
  }
}
