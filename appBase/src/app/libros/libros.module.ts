import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { BusquedaMokComponent } from './busqueda-mok/busqueda-mok.component';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { FormsModule } from '@angular/forms';
import { GooglebooksService } from '../servicios/googlebooks.service';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule
  ],
  declarations: [LibrosComponent, BusquedaMokComponent, LibrosBuscarComponent],
  exports: [LibrosComponent],
  providers: [BooksService, GooglebooksService]
})
export class LibrosModule { }
