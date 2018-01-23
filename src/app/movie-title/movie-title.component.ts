import { Component, Input } from '@angular/core';

@Component({
  selector: 'mov-title',
  templateUrl: 'movie-title.component.html'
})
export class MovieTitleComponent {

  @Input() movie;
}
