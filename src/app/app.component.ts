import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

//decorador, el comportamiento de la clase, define que sea un componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numUno:number;
  numDos:number;
  resultadoSuma:number;
  resultadopromedio:number;
  miUsuario:Usuario;
  constructor(){
    this.numUno = 0;
    this.numDos = 0;
    this.resultadoSuma = 0;
    this.resultadopromedio = 0;
    this.miUsuario=new Usuario();
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
