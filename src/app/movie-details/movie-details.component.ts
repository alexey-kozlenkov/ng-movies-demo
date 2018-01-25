import { Component, OnInit, Input } from '@angular/core';
import { MovieApiService } from '../service/movie-api/movie-api.service';
import { MovieDetails } from '../types/movie';
import { tap, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const TMDB_IMAGE_ROOT = 'https://image.tmdb.org/t/p/w500';

@Component({
  selector: 'movie-details',
  templateUrl: 'movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieId: number;
  moviePosterSrc: Observable<string>;

  constructor(private movieApi: MovieApiService) { }

  ngOnInit() {
    this.moviePosterSrc = this.movieApi.loadMovieDetails(this.movieId).pipe(
      map(movieDetails => `${TMDB_IMAGE_ROOT}${movieDetails.posterPath}`),
      startWith('https://media.giphy.com/media/kVSu7sIJexuhO/giphy.gif')
    );
  }
}
