import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageMovieListComponent } from './page-movie-list/page-movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'movies',
    component: PageMovieListComponent,
  },
  {
    path: 'movie/:movieId',
    component: MovieDetailsComponent,
  },
  {
    path: '', // localhost:4200
    redirectTo: 'movies',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
