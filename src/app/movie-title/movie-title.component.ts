import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mov-title',
  templateUrl: 'movie-title.component.html'
})
export class MovieTitleComponent implements OnInit {

  @Input() movie;

  ngOnInit() {
    console.log(1);
  }
}
