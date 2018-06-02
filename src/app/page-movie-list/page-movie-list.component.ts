import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app';
import { DiscoverMovies, getMovies } from '../store/movies';
import { MovieCard } from '../types';

@Component({
  selector: 'movie-list',
  templateUrl: 'page-movie-list.component.html',
})
export class PageMovieListComponent implements OnInit {

  movies: Observable<MovieCard[]>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.movies = this.store.select(getMovies);
  }

  ngOnInit() {
    this.store.dispatch(new DiscoverMovies());
  }
}
