import { Component, OnInit, Input } from '@angular/core';
import { MovieApiService } from '../service/movie-api/movie-api.service';
import { MovieDetails } from '../types/movie';
import { tap, map, startWith, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';

const TMDB_IMAGE_ROOT = 'https://image.tmdb.org/t/p/w500';

@Component({
  selector: 'movie-details',
  templateUrl: 'movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {
  moviePosterSrc: Observable<string>;

  constructor(
    private movieApi: MovieApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.moviePosterSrc = this.route.params.pipe(
      map((params: Params) => params.movieId),
      switchMap(movieId => this.movieApi.loadMovieDetails(movieId).pipe(
        map(movieDetails => `${TMDB_IMAGE_ROOT}${movieDetails.posterPath}`),
        startWith('https://media.giphy.com/media/kVSu7sIJexuhO/giphy.gif')
      ))
    );
  }
}
