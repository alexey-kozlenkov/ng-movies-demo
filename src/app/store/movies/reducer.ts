import { MovieCard } from '../../types';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { MovieActions, MovieActionType } from './actions';

export interface MovieState extends EntityState<MovieCard> {
}

const movieAdapter = createEntityAdapter<MovieCard>();

const initialState = movieAdapter.getInitialState();

export const movieReducer = (
  state: MovieState = initialState,
  action: MovieActions,
): MovieState => {
  switch (action.type) {
    case MovieActionType.ADD_MOVIES:
      return movieAdapter.addAll(action.movies, state);

    default:
      return state;
  }
};

export const {
  selectAll,
} = movieAdapter.getSelectors();
