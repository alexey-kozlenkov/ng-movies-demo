import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieCard, IApiMovie, mapApiMovieToCard, mapApiMovieToDetails, MovieDetails } from '../../types/movie';
import { map, filter, delay, tap, switchMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const TMDB_API_KEY = '8d254113d9a3eb949441d7c9468ed724';
const TMDB_HOST = 'https://www.themoviedb.org';
const TMDB_API_HOST = 'https://api.themoviedb.org/3';

interface MoviesResult {
  results: IApiMovie[];
}

@Injectable()
export class MovieApiService {
  private sessionId: string;
  private userAuthUrl: Observable<string>;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
  ) {
    this.userAuthUrl = this.httpClient.get<Record<'request_token', string>>(
      `${TMDB_API_HOST}/authentication/token/new`,
      { params: { api_key: TMDB_API_KEY } }
    ).pipe(
      map(({ request_token }) => request_token),
      map(requestToken => `${TMDB_HOST}/authenticate/${requestToken}?redirect_to=http://localhost:4200/redirect/auth/success`)
      );
  }

  getAuthUrl() {
    return this.userAuthUrl;
  }

  getUser(requestToken: string) {
    return this.httpClient.get<any>(
      `${TMDB_API_HOST}/authentication/session/new`,
      { params: { api_key: TMDB_API_KEY, request_token: requestToken } }
    ).pipe(
      map(({ session_id }) => session_id),
      tap(sessionId => this.sessionId = sessionId),
      switchMap(sessionId => this.httpClient.get<any>(
        `${TMDB_API_HOST}/account`,
        { params: { api_key: TMDB_API_KEY, session_id: sessionId } }
      )),
    );
  }

  discoverMovies(): Observable<MovieCard[]> {
    return this.httpClient.get<MoviesResult>(
      `${TMDB_API_HOST}/discover/movie`,
      { params: { api_key: TMDB_API_KEY } }
    ).pipe(
      map(({ results }) => results),
      map(movies => movies.map(mapApiMovieToCard)),
    );
  }

  loadMovieDetails(id: number): Observable<MovieDetails> {
    return this.httpClient.get<IApiMovie>(
      `${TMDB_API_HOST}/movie/${id}`,
      { params: { api_key: TMDB_API_KEY } }
    ).pipe(
      map(mapApiMovieToDetails),
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
      { params: { api_key: TMDB_API_KEY, session_id: this.sessionId } }
    ).subscribe(console.log);
  }

}

