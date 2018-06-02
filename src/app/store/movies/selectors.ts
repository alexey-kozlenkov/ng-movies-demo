import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState, selectAll } from './reducer';

const getMoviesState = createFeatureSelector<MovieState>('movies');

export const getMovies = createSelector(
  getMoviesState,
  selectAll
);
