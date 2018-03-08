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
    this.autor = 'Diego Garzon';
    this.lugar = 'BABEL';
    this.fecha = '2018';
  }

}
