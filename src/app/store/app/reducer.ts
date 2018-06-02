import { movieReducer, MovieState } from '../movies/reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  movies: MovieState;
}


export const reducers: ActionReducerMap<AppState> = {
  movies: movieReducer
};
