import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private currentUser: { id: number, name: string, surname: string };

  constructor() { }

  initUserProfile(user) {
    this.currentUser = user;
  }

  getUserProfile() {
    return this.currentUser;
  }
}
