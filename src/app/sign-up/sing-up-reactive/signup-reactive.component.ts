import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';

function isPasswordsMatching(control: AbstractControl) {
  return control.get('password').value === control.get('confirmPassword').value
    ? null
    : { passNotMatch: 'Passwords not match' };
}

@Component({
  selector: 'signup-reactive',
  templateUrl: 'signup-reactive.component.html'
})
export class SignUpReactiveComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: '',
      surname: '',
      account: fb.group({
        email: [
          '',
          Validators.compose([Validators.required, Validators.minLength(5)]),
          // async validators
        ],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }, { validator: isPasswordsMatching })
    });

    this.form.statusChanges.subscribe({
      next: console.log,
    });

    this.form.valueChanges.subscribe(console.log);
  }

  onReset(): void {
    this.form.reset({
      name: '',
      surname: '',
      account: {
        email: '',
        password: '',
        confirmPassword: '',
      }
    });
  }
}
