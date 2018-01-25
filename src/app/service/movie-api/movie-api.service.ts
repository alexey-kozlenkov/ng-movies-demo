import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieCard, IApiMovie, mapApiMovieToCard, mapApiMovieToDetails, MovieDetails } from '../../types/movie';
import { map, filter, delay } from 'rxjs/operators';

const API_KEY = '8d254113d9a3eb949441d7c9468ed724';
const TMDB_API_HOST = 'https://api.themoviedb.org/3';

interface MoviesResult {
  results: IApiMovie[];
}

@Injectable()
export class MovieApiService {
  constructor(private httpClient: HttpClient) {
  }

  discoverMovies(): Observable<MovieCard[]> {
    return this.httpClient.get<MoviesResult>(
      `${TMDB_API_HOST}/discover/movie`,
      { params: { api_key: API_KEY } }
    ).pipe(
      map(({ results }) => results),
      map(movies => movies.map(mapApiMovieToCard)),
    );
  }

  loadMovieDetails(id: number): Observable<MovieDetails> {
    return this.httpClient.get<IApiMovie>(
      `${TMDB_API_HOST}/movie/${id}`,
      { params: { api_key: API_KEY } }
    ).pipe(
      map(mapApiMovieToDetails),
    );
  }

}

