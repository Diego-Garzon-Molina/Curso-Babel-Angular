import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'babel-busqueda-mok',
  templateUrl: './busqueda-mok.component.html',
  styleUrls: ['./busqueda-mok.component.css']
})

export class BusquedaMokComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.aLibros = new Array();
  }
  buscar() {
    this.aLibros = this.booksService.getLibrosPorNombre(this.clave);
    this.clave = '';
  }
  buscarAsync() {
    this.clave = '';
    this.booksService.getLibrosAsync()
    .then((response: any) =>
      this.aLibros = response)
      .catch((error) => console.log(error));

  }

}
