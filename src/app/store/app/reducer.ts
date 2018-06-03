import { ActionReducerMap } from '@ngrx/store';
import { movieReducer, MovieState } from '../movies/reducer';
import { userReducer, UserState } from '../user/reducer';

export interface AppState {
  movies: MovieState;
  user: UserState;
}


export const reducers: ActionReducerMap<AppState> = {
  movies: movieReducer,
  user: userReducer,
};
