import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'babel-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {
 @ViewChild('nombreLocal.value')
  public sName: string;
  constructor() { }

  ngOnInit() {
    console.log(this.sName);
  }

}
