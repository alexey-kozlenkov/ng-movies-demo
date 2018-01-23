import { Component } from '@angular/core';

const MOVIES_SPEC = [
  {
    title: 'Godfather',
    director: 'Francis Ford Coppola',
    releaseDate: '1970-01-01',

    isFavorite: false,
    countryCode: 'it',
  },
  {
    title: 'Dark Knight',
    director: 'Christopher Nolan',
    releaseDate: '2009-01-01',

    isFavorite: true,
    countryCode: 'gt',
  },
  {
    title: 'Deadpool',
    director: 'Guy Richy',
    releaseDate: '2015-02-12',

    isFavorite: true,
    countryCode: 'uk',
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    releaseDate: '1994-01-01',

    isFavorite: false,
    countryCode: 'us',
  },
  {
    title: 'Redirected',
    director: 'Emilis Velivis',
    releaseDate: '2013-01-01',

    isFavorite: true,
    countryCode: 'lt',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies = MOVIES_SPEC;

  onToggleFavorite(isFavorite: boolean, movie) {
    movie.isFavorite = isFavorite;
  }
}
