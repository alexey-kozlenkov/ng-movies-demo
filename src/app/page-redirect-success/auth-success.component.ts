import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from '../service/movie-api/movie-api.service';
import { UserService } from '../service/user/user.service';

@Component({
  template: 'Auth Succeeded'
})

export class AuthSuccessComponent implements OnInit {
  constructor(
    private moviesApi: MovieApiService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const requestToken = this.route.snapshot.queryParams.request_token;
    this.moviesApi.getUser(requestToken)
      .subscribe((user) => {
        this.userService.initUserProfile(user);
        this.router.navigate(['']);
      });
  }
}
