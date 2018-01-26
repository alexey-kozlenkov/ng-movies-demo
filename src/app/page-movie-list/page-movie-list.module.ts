import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMovieListComponent } from './page-movie-list.component';
import { MovieCardModule } from './movie-card/movie-card.module';
import { RouterModule } from '@angular/router';

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
