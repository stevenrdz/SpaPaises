import { Component, OnInit } from '@angular/core';
import { Welcome } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string= ''
  hayError: boolean= false;
  paises: Welcome[] = [];


  constructor(private paisService: PaisService) {}
  buscar(){
    this.hayError = false;

    console.log(this.termino);

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) =>{
        console.log(paises);
      }, (err) =>{
        this.hayError = true;
        this.paises = [];
      }
    );
  }

}
