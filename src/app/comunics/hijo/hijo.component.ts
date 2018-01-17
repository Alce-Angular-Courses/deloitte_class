import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombre: string;
  @Output() nombreHijo: EventEmitter<string>;

  constructor() {
    this.nombreHijo = new EventEmitter();
  }

  ngOnInit() {
  }

  btnEmitirBorrar() {
    console.log('Boton Pulsado');
    this.nombreHijo.emit(this.nombre);

  }
}
