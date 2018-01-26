import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from './movie-api/movie-api.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [MovieApiService, UserService],
})
export class ServiceModule { }
