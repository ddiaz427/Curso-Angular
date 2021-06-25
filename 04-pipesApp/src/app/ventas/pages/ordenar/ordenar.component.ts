import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  ordernarPor: string = '';

  toogleMayusculas(){
    if(this.enMayusculas){
      this.enMayusculas = false;
    }
    else{
      this.enMayusculas = true;
    }
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Green Arrow',
      vuela: false,
      color: Color.verde
    }
  ];

  cambiarOrden(valor: string){
    this.ordernarPor = valor;
  }

}
