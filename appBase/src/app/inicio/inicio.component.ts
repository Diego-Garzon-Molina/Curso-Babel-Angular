import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'babel-inicio',
  template: `
  <babel-saludo class="col-2"></babel-saludo>
    <babel-saludo-local class="col-2"></babel-saludo-local>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
