import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TMDB_IMAGE_ROOT } from './constants';
import { MovieState, selectAll } from './reducer';

const getMoviesState = createFeatureSelector<MovieState>('movies');

export const getMovies = createSelector(
  getMoviesState,
  selectAll,
);

export const getCurrentMovie = createSelector(
  getMoviesState,
  state => state.currentMovie,
);

export const getCurrentMoviePoster = createSelector(
  getCurrentMovie,
  movie => movie && `${TMDB_IMAGE_ROOT}${movie.posterPath}`,
);
