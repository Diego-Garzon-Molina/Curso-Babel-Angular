import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'babel-agenda',
  template: `
  <div class="container">
    <div class="row">
      <babel-tareas class="col-6"></babel-tareas>
   </div>
  </div>
  `,
  styles: []
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
