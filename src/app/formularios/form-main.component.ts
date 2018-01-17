import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-main',
  template: `
<div class="container">
  <div class="row">
    <app-user class="col-6"></app-user>
    <app-printer class="col-6"></app-printer>
  </div>
</div>
  `,
  styles: [] 
})
export class FormMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
