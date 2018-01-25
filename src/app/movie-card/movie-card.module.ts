import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from './movie-card.component';
import { LanguageToFlagPipe } from './country-flag.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MovieCardComponent,
    LanguageToFlagPipe
  ],
  exports: [MovieCardComponent],
  providers: [],
})
export class MovieCardModule { }
