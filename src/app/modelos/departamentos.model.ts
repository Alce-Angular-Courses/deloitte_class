
interface Maestros {
    id: number | string;
    nombre: string;
}

export class DepartamentoModel implements Maestros {

    constructor(public id: number | string, public nombre: string) {}
}

export class PrinterModel implements Maestros {
    constructor(public id: number | string, public nombre: string) {}
}