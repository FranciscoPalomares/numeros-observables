import { Component, OnInit } from '@angular/core';
import {  NumerosServicioService} from '../numeros-servicio.service'
@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  numero:Number;


  constructor(private _numerosService:NumerosServicioService) { }

  ngOnInit() {
    this.numero=null
    
  }

  nuevoNumero():void{
    this._numerosService.agregarNumero(this.numero);
    this.numero = null;
  }

}
