import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-libros',
  template: `
    <div class="container">
      <div class="row">
        <app-buscar-libros class="col-6"></app-buscar-libros>
        <app-buscar-google class="col-6"></app-buscar-google>
      </div>
    </div>
  `,
  styles: []
})
export class MainLibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
