import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url: string = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
  buscarCapital(termino: string): Observable<Country[]>{

    const url: string = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
  getPaisPorCodigo(id: string): Observable<Country>{

    const url: string = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion(termino: string): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

}
