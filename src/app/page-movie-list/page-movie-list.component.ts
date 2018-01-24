import { Component, OnInit } from '@angular/core';
import { Movie } from '../types/movie';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'movie-list',
  templateUrl: 'page-movie-list.component.html'
})
export class PageMovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private movieApi: MovieApiService) { }

  ngOnInit() {
    this.movieApi.discoverMovies()
      .subscribe(movies => this.movies = movies);
  }
}
