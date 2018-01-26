import { Component, OnInit, Input } from '@angular/core';
import { MovieCard } from '../../types/movie';

@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.component.html'
})
export class MovieCardComponent {
  @Input() movie: MovieCard;
}
