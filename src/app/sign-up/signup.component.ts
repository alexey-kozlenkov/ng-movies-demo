import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  template: `
    <signup-template></signup-template>
    <hr/>
    <signup-reactive></signup-reactive>
  `
})

export class SignUpComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
