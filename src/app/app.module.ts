import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParesComponent } from './pares/pares.component';
import { ImparesComponent } from './impares/impares.component';
import { NumerosComponent } from './numeros/numeros.component';
import {NumerosServicioService} from './numeros-servicio.service'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ParesComponent,
    ImparesComponent,
    NumerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NumerosServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
