import { FilmService } from './services/film.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllFilmsPartialComponent } from './components/all-films-partial/all-films-partial.component';
import { FilmComponent } from './components/film/film.component';
import { FullFilmComponent } from './components/full-film/full-film.component';
import { FavoriteFilmsComponent } from './components/favorite-films/favorite-films.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes = [
  { path: '', component: AllFilmsPartialComponent },
  { path: 'films/:id', component: FullFilmComponent },
  { path: 'favorites', component: FavoriteFilmsComponent },
  { path: 'favorites/:id', component: FullFilmComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AllFilmsPartialComponent,
    FilmComponent,
    FavoriteFilmsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [FilmService],
  bootstrap: [AppComponent],
})

export class AppModule { }
