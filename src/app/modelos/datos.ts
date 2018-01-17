import { DepartamentoModel, PrinterModel } from './departamentos.model';

export const DEPTOS: Array<DepartamentoModel> = [];
export const PRINTERS: Array<PrinterModel> = [];

DEPTOS.push(new DepartamentoModel('1', 'Marketing'));
DEPTOS.push(new DepartamentoModel(2, 'Ventas'));
DEPTOS.push(new DepartamentoModel('3', 'Compras'));
DEPTOS.push(new DepartamentoModel(4, 'Sistemas'));

PRINTERS.push(new PrinterModel('1', 'HP'));
PRINTERS.push(new PrinterModel('2', 'Cannon'));
PRINTERS.push(new PrinterModel('3', 'Lexmark'));
PRINTERS.push(new PrinterModel('4', 'Brother'));
