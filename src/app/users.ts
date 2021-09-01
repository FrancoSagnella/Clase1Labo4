import { Usuario } from "./clases/usuario";

//declaro una constante que es un array de 10 heroes, simulando como si me viniera de una bd
//lo tengo que exportar, asi otro componente lo puede importar y usarlo
export const USERS: Usuario[] = [
  {nombre:"franco", clave: '123456'},
  {nombre:"pepe", clave: '123456'},
  {nombre:"roberto", clave: '123456'},
  {nombre:"nacho", clave: '123456'},
];