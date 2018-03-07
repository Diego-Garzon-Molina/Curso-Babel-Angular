import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'babel-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SaludoComponent implements OnInit {

  public nombre: string;

  constructor() { }

  ngOnInit() {
    this.nombre = 'Pepe';
  }
  fBorrar() {
    this.nombre = '';
  }

}
