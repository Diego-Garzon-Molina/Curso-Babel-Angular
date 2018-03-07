import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'babel-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public sNombre: string;
  constructor() { }

  ngOnInit() {
  }
  fBorrar() {
    this.sNombre = '';
  }
}
