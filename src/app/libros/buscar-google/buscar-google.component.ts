import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css']
})
export class BuscarGoogleComponent implements OnInit {

  aLibros: Array<string>;
  clave: string;
  urlBase: string;

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscar() {
    if (!this.clave) {
      return;
    }
    const URL = this.urlBase + this.clave;
    this.httpClient.get(URL).toPromise()
    .then((response: any) => {
      console.log(response);
      response.items.forEach(element => {
        this.aLibros.push(element.volumeInfo.title);
      });
    });
    this.clave = '';
  }
}
