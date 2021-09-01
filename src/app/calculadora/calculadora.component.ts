import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  numUno:number;
  numDos:number;
  resultadoSuma:number;
  resultadopromedio:number;
  constructor(){
    this.numUno = 0;
    this.numDos = 0;
    this.resultadoSuma = 0;
    this.resultadopromedio = 0;
  }

  ngOnInit(): void {
  }
  
  miMetodo(){
    //tengo que parsearlo a string y despues a int, porque la variable es number y no me deja parsear, pero desde el html me llega como string
    this.resultadoSuma = parseInt(this.numUno.toString()) + parseInt(this.numDos.toString());
    this.resultadopromedio = this.resultadoSuma/2;
  }
  limpiar(){
    this.numDos = 0;
    this.numUno = 0;
    this.resultadoSuma = 0;
    this.resultadopromedio = 0;
  }
}
