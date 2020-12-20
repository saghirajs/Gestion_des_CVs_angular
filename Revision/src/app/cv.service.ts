import { Injectable } from '@angular/core';
import {Personne} from './model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'Saghir', 'SAGHIR', 23, 'saghir_cv.jpg', 12345, 'Web technologies engineer'),
      new Personne(2, 'Semira', 'SEMIRA', 29, 'rotating_card_profile.png', 11111, 'Teacher')
    ];
  }
  getPersonnes(): Personne[]{
    return this.personnes;
  }
  addPersonne(personne: Personne){
    this.personnes.push(personne);
  }
}
