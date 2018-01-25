import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from './movie-card.component';
import { LanguageToFlagPipe } from './country-flag.pipe';
import { MovieDetailsModule } from '../movie-details/movie-details.module';

@NgModule({
  imports: [
    CommonModule,
    MovieDetailsModule
  ],
  declarations: [
    MovieCardComponent,
    LanguageToFlagPipe
  ],
  exports: [MovieCardComponent],
  providers: [],
})
export class MovieCardModule { }
