import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../types/movie';
import { MovieApiService } from '../service';

@Component({
  selector: 'movie-list',
  templateUrl: 'page-movie-list.component.html'
})
export class PageMovieListComponent implements OnInit {

  movies: MovieCard[];

  constructor(private movieApi: MovieApiService) { }

  ngOnInit() {
    this.movieApi.discoverMovies()
      .subscribe(movies => this.movies = movies);
  }
}
