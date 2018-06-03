import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, mapTo, withLatestFrom } from 'rxjs/internal/operators';
import { map, switchMap } from 'rxjs/operators';
import { IApiMovie, mapApiMovieToCard, mapApiMovieToDetails } from '../../types';
import { AppState } from '../app';
import { getSessionId, getUserProfile } from '../user';
import {
  DiscoverMoviesComplete,
  FavCurrentMovieComplete,
  LoadMovie,
  LoadMovieComplete,
  MovieActionType,
} from './actions';
import { TMDB_API_HOST, TMDB_API_KEY } from './constants';
import { getCurrentMovie } from './selectors';

@Injectable()
export class MoviesEffect {

  @Effect()
  discoverMovies$: Observable<Action> = this.actions$.pipe(
    ofType(MovieActionType.DISCOVER_MOVIES),
    switchMap(() => this.httpClient.get<{ results: IApiMovie[] }>(
      `${TMDB_API_HOST}/discover/movie`,
      { params: { api_key: TMDB_API_KEY } },
    ).pipe(
      map(({ results }) => results),
      map(movies => movies.map(mapApiMovieToCard)),
      map(movies => new DiscoverMoviesComplete(movies)),
      catchError(() => EMPTY),
    )),
  );

  @Effect()
  loadMovieDetails$: Observable<Action> = this.actions$.pipe(
    ofType<LoadMovie>(MovieActionType.LOAD_MOVIE),
    switchMap(({ id }) => this.httpClient.get<IApiMovie>(
      `${TMDB_API_HOST}/movie/${id}`,
      { params: { api_key: TMDB_API_KEY } },
    ).pipe(
      map(mapApiMovieToDetails),
      map(movie => new LoadMovieComplete(movie)),
      catchError(() => EMPTY),
    )),
  );

  @Effect()
  makeCurrentMovieFavorite$: Observable<Action> = this.actions$.pipe(
    ofType(MovieActionType.FAV_CURRENT_MOVIE),
    withLatestFrom(
      this.store.select(getCurrentMovie),
      this.store.select(getSessionId),
      this.store.select(getUserProfile),
    ),
    switchMap(([, movie, sessionId, user]) => this.httpClient.post(
      `${TMDB_API_HOST}/account/${user.id}/favorite`,
      {
        media_type: 'movie',
        media_id: movie.id,
        favorite: true,
      },
      { params: { api_key: TMDB_API_KEY, session_id: sessionId } },
    ).pipe(
      mapTo(new FavCurrentMovieComplete()),
    )),
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private httpClient: HttpClient,
  ) {
  }
}
