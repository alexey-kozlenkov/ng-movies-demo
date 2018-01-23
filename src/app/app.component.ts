import { Component } from '@angular/core';

const MOVIES_SPEC = [
  {
    title: 'Godfather',
    director: 'Francis Ford Coppola',
    releaseDate: '1970-01-01',

    isFavorite: false,
  },
  {
    title: 'Dark Knight',
    director: 'Christopher Nolan',
    releaseDate: '2009-01-01',

    isFavorite: true,
  },
  {
    title: 'Deadpool',
    director: 'Guy Richy',
    releaseDate: '2015-02-12',

    isFavorite: true,
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    releaseDate: '1994-01-01',

    isFavorite: false,
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
