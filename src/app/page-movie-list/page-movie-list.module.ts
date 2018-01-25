import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMovieListComponent } from './page-movie-list.component';
import { MovieCardModule } from '../movie-card/movie-card.module';

@NgModule({
  imports: [
    CommonModule,
    MovieCardModule,
  ],
  declarations: [
    PageMovieListComponent
  ],
  exports: [
    PageMovieListComponent
  ],
})
export class PageMovieListModule { }
