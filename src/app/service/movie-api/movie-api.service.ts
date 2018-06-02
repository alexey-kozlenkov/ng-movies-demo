import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const TMDB_API_KEY = '8d254113d9a3eb949441d7c9468ed724';
const TMDB_HOST = 'https://www.themoviedb.org';
const TMDB_API_HOST = 'https://api.themoviedb.org/3';


@Injectable()
export class MovieApiService {
  private sessionId: string;
  private userAuthUrl: Observable<string>;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
  ) {
    this.userAuthUrl = this.httpClient.get<{ request_token: string }>(
      `${TMDB_API_HOST}/authentication/token/new`,
      { params: { api_key: TMDB_API_KEY } },
    ).pipe(
      map(({ request_token }) => request_token),
      map(requestToken => `${TMDB_HOST}/authenticate/${requestToken}?redirect_to=http://localhost:4200/redirect/auth/success`),
    );
  }

  getAuthUrl() {
    return this.userAuthUrl;
  }

  getUser(requestToken: string) {
    return this.httpClient.get<any>(
      `${TMDB_API_HOST}/authentication/session/new`,
      { params: { api_key: TMDB_API_KEY, request_token: requestToken } },
    ).pipe(
      map(({ session_id }) => session_id),
      tap(sessionId => this.sessionId = sessionId),
      switchMap(sessionId => this.httpClient.get<any>(
        `${TMDB_API_HOST}/account`,
        { params: { api_key: TMDB_API_KEY, session_id: sessionId } },
      )),
    );
  }


  makeFavorite(movieId: number, favorite: boolean) {
    this.httpClient.post<any>(
      `${TMDB_API_HOST}/account/${this.userService.getUserProfile().id}/favorite`,
      {
        media_type: 'movie',
        media_id: movieId,
        favorite,
      },
      { params: { api_key: TMDB_API_KEY, session_id: this.sessionId } },
    ).subscribe(console.log);
  }

}

