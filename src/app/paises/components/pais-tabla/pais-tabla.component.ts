import { Component, Input } from '@angular/core';
import { PaisesModule } from '../../paises.module';
import { Welcome } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent{

  constructor() { }

  @Input() paises: Welcome[] = [];
}
