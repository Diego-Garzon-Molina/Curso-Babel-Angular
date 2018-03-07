import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'babel-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()  sNombre: string;
  @Output()  eRespuesta: EventEmitter<any>;
  constructor() {
    this.eRespuesta = new EventEmitter();
   }

  ngOnInit() {
  }
  respuesta() {
    this.eRespuesta.emit();
  }

}
