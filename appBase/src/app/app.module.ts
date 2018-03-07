import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { MenuComponent } from './nucleo/menu/menu.component';
import { InicioModule } from './inicio/inicio.module';
import { AboutModule } from './about/about.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NucleoModule,
    InicioModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
