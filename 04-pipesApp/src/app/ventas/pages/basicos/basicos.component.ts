import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'dario';
  nombreUpper: string = 'DARIO';
  nombreCompleto: string = 'DARIO AlEXander diaz FlOrEZ';

  fecha: Date = new Date();

}
