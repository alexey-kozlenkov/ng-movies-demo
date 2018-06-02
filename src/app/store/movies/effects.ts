import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IApiMovie, mapApiMovieToCard, mapApiMovieToDetails } from '../../types';
import { DiscoverMoviesComplete, LoadMovie, LoadMovieComplete, MovieActionType } from './actions';
import { TMDB_API_HOST, TMDB_API_KEY } from './constants';

@Injectable()
export class MoviesEffect {

  @Effect()
  discoverMovies$: Observable<Action> = this.actions$.pipe(
    ofType(MovieActionType.DISCOVER_MOVIES),
    switchMap(() => this.httpClient.get<{ results: IApiMovie[] }>(
      `${TMDB_API_HOST}/discover/movie`,
      { params: { api_key: TMDB_API_KEY } },
    )),
    map(({ results }) => results),
    map(movies => movies.map(mapApiMovieToCard)),
    map(movies => new DiscoverMoviesComplete(movies)),
  );

  @Effect()
  loadMovieDetails$: Observable<Action> = this.actions$.pipe(
    ofType<LoadMovie>(MovieActionType.LOAD_MOVIE),
    switchMap(({ id }) => this.httpClient.get<IApiMovie>(
      `${TMDB_API_HOST}/movie/${id}`,
      { params: { api_key: TMDB_API_KEY } },
    )),
    map(mapApiMovieToDetails),
    map(movie => new LoadMovieComplete(movie)),
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
  ) {
  }
}
