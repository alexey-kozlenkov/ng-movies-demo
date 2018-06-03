import { Action } from '@ngrx/store';
import { MovieCard, MovieDetails } from '../../types';

export enum MovieActionType {
  DISCOVER_MOVIES = '[Movies] Discover Movies',
  DISCOVER_MOVIES_COMPLETE = '[Movies] Add Movies',
  LOAD_MOVIE = '[Movies] Load Movie',
  LOAD_MOVIE_COMPLETE = '[Movies] Load Movie Complete',
  RESET_CURRENT_MOVIE = '[Movies] Reset Current Movie',
  FAV_CURRENT_MOVIE = '[Movies] Favorite Current Movie',
  FAV_CURRENT_MOVIE_COMPLETE = '[Movies] Favorite Current Movie Complete',
}

export class DiscoverMovies implements Action {
  readonly type = MovieActionType.DISCOVER_MOVIES;
}

export class DiscoverMoviesComplete implements Action {
  readonly type = MovieActionType.DISCOVER_MOVIES_COMPLETE;

  constructor(public movies: MovieCard[]) {
  }
}

export class LoadMovie implements Action {
  readonly type = MovieActionType.LOAD_MOVIE;

  constructor(public id: string) {
  }
}

export class ResetCurrentMovie implements Action {
  readonly type = MovieActionType.RESET_CURRENT_MOVIE;
}

export class LoadMovieComplete implements Action {
  readonly type = MovieActionType.LOAD_MOVIE_COMPLETE;

  constructor(public details: MovieDetails) {
  }
}

export class FavCurrentMovie implements Action {
  readonly type = MovieActionType.FAV_CURRENT_MOVIE;
}

export class FavCurrentMovieComplete implements Action {
  readonly type = MovieActionType.FAV_CURRENT_MOVIE_COMPLETE;
}

export type MovieActions
  = DiscoverMovies
  | DiscoverMoviesComplete
  | LoadMovie
  | LoadMovieComplete
  | ResetCurrentMovie
  | FavCurrentMovie
  | FavCurrentMovieComplete
  ;
