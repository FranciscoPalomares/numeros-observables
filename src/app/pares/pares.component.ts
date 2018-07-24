import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  NumerosServicioService} from '../numeros-servicio.service'


@Component({
  selector: 'app-pares',
  templateUrl: './pares.component.html',
  styleUrls: ['./pares.component.css']
})
export class ParesComponent implements OnInit {
  numeros: Number[] = [];
  numeros$:Observable<Number[]>;

  constructor(private _numerosService:NumerosServicioService) { }

  ngOnInit() {
    this.numeros$ = this._numerosService.getNumerosPares$();
    this.numeros$.subscribe(
      numeros => this.numeros = numeros
    )
  }

}
