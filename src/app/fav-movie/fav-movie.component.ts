import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fav-movie',
  templateUrl: 'fav-movie.component.html'
})
export class FavoriteMovieComponent  {
  @Input() isFavorite = false;
  @Output() isFavoriteChange = new EventEmitter<boolean>();

  onMakeFavorite() {
    this.isFavoriteChange.emit(!this.isFavorite);
  }
}
