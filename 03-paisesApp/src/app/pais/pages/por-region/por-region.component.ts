import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  termino: string = '';
  paises:  Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string){
    this.regionActiva= region;
    this.termino = region;
    this.paisService.buscarRegion(this.termino)
    .subscribe((paises) => {
      this.paises = paises;
      console.log(paises);
    }, (err) => {
      this.paises = [];
    });
  }

  buscar( termino: string ){
  }
}
