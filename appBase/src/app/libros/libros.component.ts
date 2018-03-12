import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'babel-libros',
  template: `
  <div class="container">
  <div class="row">
  <babel-busqueda-mok class="m-1"></babel-busqueda-mok>
<babel-libros-buscar class="m-1"></babel-libros-buscar>

 </div>
</div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
