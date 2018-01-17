import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../modelos/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  oUsuario: UserModel;

  constructor() { }

  ngOnInit() {
    this.oUsuario = {nombre: 'Pepe', apellidos: '', telefono: ''};
  }

  enviar() {
    console.log('Datos enviados');
  }
}
