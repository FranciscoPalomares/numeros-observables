import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NumerosServicioService {
  private numeros: Number[];
  private numeros$:Subject<Number[]> = new Subject<Number[]>();

  constructor() {this.numeros = [] }


  getNumeros(){
    return this.numeros;
    
  }

  getNumerosPares$(): Observable<Number[]>{
    return this.numeros$.asObservable().map(numeros$ => numeros$.filter((numero:any)=> numero % 2 === 0));
  }
  getNumerosImPares$(): Observable<Number[]>{
    return this.numeros$.asObservable().map(numeros$ => numeros$.filter((numero:any)=> numero % 2 != 0));
  }

  agregarNumero(numero:Number){


    if(typeof numero == 'number'){
      console.log(numero);
      this.numeros.push(numero);
      this.numeros$.next(this.numeros);
    }
   
  }

}
