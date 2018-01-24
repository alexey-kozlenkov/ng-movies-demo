import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../types';

@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.component.html'
})
export class MovieCardComponent {
  @Input() movie: Movie;
}
