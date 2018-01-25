import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './signup.component';
import { SignUpReactiveComponent } from './sing-up-reactive/signup-reactive.component';
import { SignupTemplateComponent, PasswordMatchDirective } from './sing-up-template/signup-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SignUpComponent,
    SignUpReactiveComponent,
    SignupTemplateComponent,
    PasswordMatchDirective,
  ],
  exports: [],
})
export class SignUpModule { }
