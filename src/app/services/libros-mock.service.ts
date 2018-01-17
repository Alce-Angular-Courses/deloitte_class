import { Injectable } from '@angular/core';

@Injectable()
export class LibrosMockService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular Fundamnetos',
      'Angular Avanzado',
      'Todo Angular',
      'Angular en 30 minutos'
    ];
  }

  buscarLibros(clave) {
    return this.aLibros;
  }

  buscarAsinc(clave) {
    return new Promise<Array<string>> ((resolve, reject) => {
      setTimeout(() => {
        resolve(this.aLibros);
      }, 2000);
    });
  }

}
