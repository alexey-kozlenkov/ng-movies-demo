import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { IApiMovie, mapApiMovieToCard } from '../../types';
import { AddMovies, MovieActionType } from './actions';

const TMDB_API_KEY = '8d254113d9a3eb949441d7c9468ed724';
const TMDB_HOST = 'https://www.themoviedb.org';
const TMDB_API_HOST = 'https://api.themoviedb.org/3';

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
    map(movies => new AddMovies(movies)),
  );


  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
  ) {
  }
}
