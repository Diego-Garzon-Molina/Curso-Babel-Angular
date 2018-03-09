import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'babel-printer',
  template: `
  <div class="container">
  <div class="row">
  <babel-form-td class="col"></babel-form-td>
  </div>
  </div>
   `,
  styles: []
})
export class PrinterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
