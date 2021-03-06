import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Welcome } from '../interfaces/pais-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string= 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Welcome[]>{

    const url: string = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Welcome[]>(url);
  }

}
