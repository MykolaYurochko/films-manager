import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IMovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  // Observer creating
  favoritesValue = new BehaviorSubject(this.favorites);

  // get all favorites from localStorage
  get favorites() {
    let storage = localStorage.getItem('favorites');
    return storage == null ? '[]' : storage;
  }

  // add new information about favorite film to localStorage
  set favorites(data) {
    let inputData = JSON.stringify(data);
    this.favoritesValue.next(inputData);
    localStorage.setItem('favorites', inputData);
  }

  // add new position to favorites list
  addFavorite(film: IMovie): void {
    let favorite = film;
    let favorites = JSON.parse(this.favorites);
    favorites.push(favorite);
    this.favorites = favorites;
  }

  // remove one folm from favorites
  removeFavorite(film: IMovie): void {
    let favorites = JSON.parse(this.favorites);
    favorites = favorites.filter(favorite => favorite.id != film.id);
    this.favorites = favorites;
  }

  // remove all films from favorites list
  clearList(): void {
    let favorite = [];
    let favorites = JSON.parse(this.favorites);
    favorites = favorite;
    this.favorites = favorites;
  }
}
