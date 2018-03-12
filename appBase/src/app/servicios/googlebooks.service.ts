import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';
import { reject } from 'q';
import { element } from 'protractor';

@Injectable()
export class GooglebooksService {
  urlBase: string;
  aLibros: Array<string>;
  constructor(public http: HttpClient) {
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  busqueda(clave: string): any {
   const url = this.urlBase + clave;
   this.aLibros = new Array();
   return this.http.get(url).toPromise()
    .then(
      (response: any) => {
        console.log(response.items);
        // tslint:disable-next-line:no-shadowed-variable
        response.items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
      // tslint:disable-next-line:no-shadowed-variable
      return new Promise ((resolve, reject) => resolve(this.aLibros));
      }
    );
  }

}
