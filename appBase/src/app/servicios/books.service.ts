import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  aLibros: Array<string>;
  constructor() {
    this.aLibros = new Array();
    this.aLibros.push('Angular Avanzado');
    this.aLibros.push('Aprendiendo Angular');
    this.aLibros.push('Angular para Dummies');
    this.aLibros.push('Angular');
  }
  getLibrosPorNombre(clave: string) {
    return this.aLibros;
  }
  getLibrosAsync() {
  //  this.aLibros = new Array();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0) {
          resolve(this.aLibros);
        } else {
          reject('Esto es un error');
        }
      }, 500);
    });
  }

}
