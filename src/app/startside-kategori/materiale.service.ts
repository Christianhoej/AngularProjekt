import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MaterialeService {
  materiale = ['Ler', 'Træ', 'Metal', 'Garn', 'Læder', 'Bomuld'];

  getMaterialer() {
    return this.materiale.slice();
  }

  getMateriale(index: number) {
    return this.materiale[index];
  }
}
