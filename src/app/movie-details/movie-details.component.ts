import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { MovieApiService } from '../service';

const TMDB_IMAGE_ROOT = 'https://image.tmdb.org/t/p/w500';

@Component({
  selector: 'movie-details',
  templateUrl: 'movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;
  moviePosterSrc: Observable<string>;

  constructor(
    private movieApi: MovieApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.moviePosterSrc = this.route.params.pipe(
      map((params: Params) => params.movieId),
      tap(movieId => this.movieId = movieId),
      switchMap(movieId => this.movieApi.loadMovieDetails(movieId).pipe(
        map(movieDetails => `${TMDB_IMAGE_ROOT}${movieDetails.posterPath}`),
        startWith('https://media.giphy.com/media/kVSu7sIJexuhO/giphy.gif')
      ))
    );
  }

  onMakeFavorite() {
    this.movieApi.makeFavorite(this.movieId, true);
  }
}
