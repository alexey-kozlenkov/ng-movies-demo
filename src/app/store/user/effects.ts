import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap, switchMapTo } from 'rxjs/internal/operators';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../../types/user';
import { AppState } from '../app';
import { TMDB_API_HOST, TMDB_API_KEY, TMDB_HOST } from '../movies/constants';
import { Go } from '../router';
import { LoadUser, LoadUserAuthUrlSuccess, LoadUserSuccess, SetSessionId, UserActionTypes } from './actions';

@Injectable()
export class UserEffects {

  @Effect()
  loadUserAuthUrl$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.LOAD_AUTH_URL),
    switchMapTo(this.httpClient.get<{ request_token: string }>(
      `${TMDB_API_HOST}/authentication/token/new`,
      { params: { api_key: TMDB_API_KEY } },
    ).pipe(
      map(({ request_token }) => request_token),
      map(requestToken => `${TMDB_HOST}/authenticate/${requestToken}?redirect_to=http://localhost:4200/redirect/auth/success`),
      map(authUrl => new LoadUserAuthUrlSuccess(authUrl)),
    )),
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoadUser>(UserActionTypes.LOAD_USER),
    switchMap((action) => this.httpClient.get<{ session_id: string }>(
      `${TMDB_API_HOST}/authentication/session/new`,
      { params: { api_key: TMDB_API_KEY, request_token: action.requestToken } },
    ).pipe(
      map(({ session_id }) => session_id),
      tap(sessionId => this.store.dispatch(new SetSessionId(sessionId))),
      switchMap(sessionId => this.httpClient.get<User>(
        `${TMDB_API_HOST}/account`,
        { params: { api_key: TMDB_API_KEY, session_id: sessionId } },
      ).pipe(
        mergeMap(user => [
          new LoadUserSuccess(user),
          new Go({ path: [''] }),
        ]),
      )),
    )),
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private httpClient: HttpClient,
  ) {
  }
}
