import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  NumerosServicioService} from '../numeros-servicio.service'
@Component({
  selector: 'app-impares',
  templateUrl: './impares.component.html',
  styleUrls: ['./impares.component.css']
})
export class ImparesComponent implements OnInit {

  numeros: Number[] = [];
  numeros$:Observable<Number[]>;

  constructor(private _numerosService:NumerosServicioService) { }

  ngOnInit() {
    this.numeros$ = this._numerosService.getNumerosImPares$();
    this.numeros$.subscribe(
      numeros => this.numeros = numeros
    )
    
  }

}
