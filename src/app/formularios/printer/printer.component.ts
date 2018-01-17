import { Component, OnInit } from '@angular/core';
import { PrinterModel, DepartamentoModel } from '../../modelos/departamentos.model';
import { DEPTOS, PRINTERS } from '../../modelos/datos';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {

  printers: Array<PrinterModel>;
  departamentos: Array<DepartamentoModel>;
  orden: {
    impresora: PrinterModel,
    isColor: boolean,
    isClaro: boolean,
    departamento: DepartamentoModel
  };

  constructor() { }

  ngOnInit() {
    this.departamentos = DEPTOS;
    this.printers = PRINTERS;
    this.orden = {
      impresora: new PrinterModel('', ''),
      isColor: true,
      isClaro: true,
      departamento: new DepartamentoModel('', '')
    };
  }

}
