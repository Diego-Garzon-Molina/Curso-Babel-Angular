import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';
import { GooglebooksService } from '../../servicios/googlebooks.service';

@Component({
  selector: 'babel-libros-buscar',
  templateUrl: './libros-buscar.component.html',
  styleUrls: ['./libros-buscar.component.css']
})

export class LibrosBuscarComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;
  urlBase: string;
  constructor(public busqueda: GooglebooksService) { }
  ngOnInit() {
    this.aLibros = new Array();
    }
  buscar() {
this.busqueda.busqueda(this.clave)
.then((response: Array<string>) =>  this.aLibros = response);
  }


  buscarAsync() {
    this.clave = '';
  }

}
