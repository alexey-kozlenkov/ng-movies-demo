import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { MovieCard, MovieDetails } from '../../types';
import { MovieActions, MovieActionType } from './actions';

const movieAdapter = createEntityAdapter<MovieCard>();

export interface MovieState extends EntityState<MovieCard> {
  currentMovie: MovieDetails;
}

const initialState = {
  ...movieAdapter.getInitialState(),
  currentMovie: null,
};

export const movieReducer = (
  state: MovieState = initialState,
  action: MovieActions,
): MovieState => {
  switch (action.type) {
    case MovieActionType.DISCOVER_MOVIES_COMPLETE:
      return movieAdapter.addAll(action.movies, state);

    case MovieActionType.RESET_CURRENT_MOVIE:
      return { ...state, currentMovie: null };

    case MovieActionType.LOAD_MOVIE_COMPLETE:
      return { ...state, currentMovie: action.details };

    default:
      return state;
  }
};

export const {
  selectAll,
} = movieAdapter.getSelectors();
