import { Component, OnInit, Input } from '@angular/core';
import { MovieCard } from '../types';

@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.component.html'
})
export class MovieCardComponent {
  @Input() movie: MovieCard;

  detailsShown: boolean;

  onShowDetails() {
    this.detailsShown = !this.detailsShown;
  }
}
