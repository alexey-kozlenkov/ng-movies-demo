import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function isPasswordsMatching(control: AbstractControl) {
  console.log('pass match');
  if (!control.get('password') || !control.get('confirmPassword')) { return null; }
  return control.get('password').value === control.get('confirmPassword').value
    ? null
    : { passNotMatch: 'Passwords not match' };
}

@Directive({
  selector: '[passwordMatcher]',
  providers: [{
    provide: NG_VALIDATORS,
    multi: true,
    useValue: isPasswordsMatching
  }]
})
export class NameDirective {
  constructor() { }
}

@Component({
  selector: 'signup-template',
  templateUrl: 'signup-template.component.html'
})
export class SignupTemplateComponent implements OnInit {

  name = 'John';

  ngOnInit() { }
}
