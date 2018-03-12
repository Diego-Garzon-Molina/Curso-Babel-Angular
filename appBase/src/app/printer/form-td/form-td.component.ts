import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { aDepartamentos, aPrinters } from '../../modelos/master.data';
import { Departamento, Printer } from '../../modelos/master.models';
import { OrderPrint } from '../../modelos/ordenprint.models';

@Component({
  selector: 'babel-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aaDepartamentos: Array<Departamento>;
  aaPrinters: Array<Printer>;
  orderPrint: OrderPrint;
  departamento: Departamento;
  contador: number;
  @ViewChild('formPrinter') formulario: any;
  constructor() { }

  ngOnInit() {
    this.aaDepartamentos =  aDepartamentos;
    this.aaPrinters = aPrinters;
    this.orderPrint = new OrderPrint('',  '',
     '',  new Printer('', '') , false, false, null);
  }
  enviar() {
    console.dir(this.formulario);
  }
  borrar() {
    this.formulario.reset();
  }


}
