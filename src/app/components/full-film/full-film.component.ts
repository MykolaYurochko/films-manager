import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-full-film',
  templateUrl: './full-film.component.html',
  styleUrls: ['./full-film.component.scss']
})

export class FullFilmComponent implements OnInit {
  film: IMovie;
  urlParam: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

    // subscribing to film objectl it comes from router extras
    this.route.params.subscribe(() => {
      this.film = this.router.getCurrentNavigation().extras.state.film;
    });

    // finding part of url to choose back way
    this.route.url.subscribe(url => {
      this.urlParam = url[0].path;
    });
  }

  ngOnInit() { }

  // back to main wrapper
  backToList() {
    this.urlParam == 'films'
      ? this.router.navigate(['/'])
      : this.router.navigate(['favorites']);
  }
}
