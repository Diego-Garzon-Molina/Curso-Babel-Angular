import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'babel-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public autor: string;
  public lugar: string;
  public fecha: any;
  constructor() { }

  ngOnInit() {
    this.autor = 'nosotros';
    this.lugar = 'babel';
    this.fecha = 'hoy';
  }

}
