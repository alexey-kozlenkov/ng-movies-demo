import { Action } from '@ngrx/store';
import { MovieCard } from '../../types';

export enum MovieActionType {
  DISCOVER_MOVIES = '[Movies] Discover Movies',
  ADD_MOVIES = '[Movies] Add Movies'
}

export class DiscoverMovies implements Action {
  readonly type = MovieActionType.DISCOVER_MOVIES;
}

export class AddMovies implements Action {
  readonly type = MovieActionType.ADD_MOVIES;

  movies: MovieCard[];

  constructor(movies: MovieCard[]) {
    this.movies = movies;
  }
}

export type MovieActions
  = DiscoverMovies
  | AddMovies;
