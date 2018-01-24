import { Component, OnInit } from '@angular/core';
import { Movie } from '../types/movie';

@Component({
  selector: 'movie-list',
  templateUrl: 'page-movie-list.component.html'
})
export class PageMovieListComponent implements OnInit {

  movies: Movie[] = [
    {
      id: 0,
      title: 'Dark Knight',
      originalTitle: 'Dark Knight',
      overview: 'Christopher Nolan is a genius',
      releaseDate: '2009-01-01',
      originalLanguage: 'en',
      voteAverage: 5,
    },
  ];

  constructor() { }

  ngOnInit() { }
}
