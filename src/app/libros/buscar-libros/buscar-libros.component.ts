import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';

@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrls: ['./buscar-libros.component.css']
})
export class BuscarLibrosComponent implements OnInit {

  aLibros: Array<string>;
  clave: string;

  constructor(public  librosMockService: LibrosMockService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.librosMockService.buscarLibros(this.clave);
    this.clave = '';
  }

  buscarAsync() {
    this.librosMockService.buscarAsinc(this.clave)
    .then(response => this.aLibros = response);
    this.clave = '';
  }
}
