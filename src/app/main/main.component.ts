import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container">
    <div class="row">
      <app-binding class="col"></app-binding>
      <app-bindlocal class="col"></app-bindlocal>
    </div>
  </div>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
