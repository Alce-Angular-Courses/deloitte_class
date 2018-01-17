import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  template: `
  <div class="container">
    <div class="row">
      <app-lista class="col-8"></app-lista>
    </div>
  </div>
  `,
  styles: []
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
