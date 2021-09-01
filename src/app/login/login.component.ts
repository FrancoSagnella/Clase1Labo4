import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { USERS } from '../users'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario;
  constructor(private router: Router) {
    this.user = {nombre:'', clave:''};
   }

  ngOnInit(): void {
  }

  login(): void
  {
    var ret:Boolean = false;
    USERS.forEach((user) =>{
      if(user.clave == this.user.clave && user.nombre == this.user.nombre){
        this.router.navigateByUrl('/bienvenido');
        ret = true;
      }
    });
    if(!ret)
    this.router.navigateByUrl('/error');
  }
}
