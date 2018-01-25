import { NgModule } from '@angular/core';

import { MovieDetailsComponent } from './movie-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieDetailsComponent],
  exports: [MovieDetailsComponent],
})
export class MovieDetailsModule { }
