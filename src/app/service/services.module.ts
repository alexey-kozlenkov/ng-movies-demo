import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from './movie-api/movie-api.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [MovieApiService],
})
export class ServiceModule { }
