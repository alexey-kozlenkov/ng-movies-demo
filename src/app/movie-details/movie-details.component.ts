import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, startWith } from 'rxjs/internal/operators';
import { map, tap } from 'rxjs/operators';
import { AppState } from '../store/app';
import { getCurrentMoviePoster, LoadMovie, ResetCurrentMovie } from '../store/movies';

@Component({
  selector: 'movie-details',
  templateUrl: 'movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieId: number;
  moviePosterSrc: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.moviePosterSrc = this.store.select(getCurrentMoviePoster).pipe(
      filter(Boolean),
      startWith('https://media.giphy.com/media/kVSu7sIJexuhO/giphy.gif'),
    );
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.movieId),
      tap(movieId => this.movieId = movieId),
    ).subscribe(id => this.store.dispatch(new LoadMovie(id)));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ResetCurrentMovie());
  }

  onMakeFavorite() {
    // this.movieApi.makeFavorite(this.movieId, true);
  }

}
