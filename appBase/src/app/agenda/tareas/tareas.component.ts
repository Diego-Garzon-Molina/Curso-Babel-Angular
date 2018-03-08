import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'babel-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  sTarea: string;
  aTareas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTareas = []; // new Array<string>()
  }
  addTareas() {
    if (this.sTarea) { this.aTareas.push(this.sTarea); }
  }
  clear() {
    this.aTareas = new Array<string>();
  }
  borrar(index) {
    this.aTareas.splice(index, 1);
  }
}
