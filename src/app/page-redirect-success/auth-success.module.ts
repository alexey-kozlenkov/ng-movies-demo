import { NgModule } from '@angular/core';

import { AuthSuccessComponent } from './auth-success.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [AuthSuccessComponent],
  exports: [AuthSuccessComponent],
})
export class AuthSuccessModule { }
