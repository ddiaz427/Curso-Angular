import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Dario';
  genero: string = 'm';

  invitacionMapa = {
    'm': 'invitarlo',
    'f': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Jose', 'Dario', 'Mayra'];

  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  };

  cambiarCliente(){
    this.nombre = 'Mayra';
    this.genero = 'f';
  }

  borrarCliente(){
    this.clientes.pop();
  }


  // Keyvalue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ibagué, Colombia'
  };
  
  heroes = [
    {
      nombre: 'Superman',
      identidad: 'Clark Kent'
    },
    
    {
      nombre: 'Batman',
      identidad: 'Bruce Wayne'
    },
    
    {
      nombre: 'Wonder Woman',
      identidad: 'Diane Prince'
    }
  ];

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos una promesa');
    }, 3500);
  });

}
