import {Printer, Departamento} from './master.models';
export class OrderPrint {
    constructor(public nombre: string, public apellidos: string,
        public telefono: string, public printer: Printer,
         public isBlancoNegro: boolean, public isColor: boolean, public departamento: Departamento) {}
}
