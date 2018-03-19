import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent} from './contactos.component';

import { ContactosRoutingModule } from './contactos-routing.module';
import { FormsModule } from '@angular/forms';

import { AltasComponent } from './altas/altas.component';
import { ListaComponent } from './lista/lista.component';
import { ContactosService } from '../servicios/contactos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactosRoutingModule
  ],
  declarations: [
    ContactosComponent,
    ListaComponent,
    AltasComponent
  ],
  providers: [
    ContactosService
  ]
})
export class ContactosModule { }
