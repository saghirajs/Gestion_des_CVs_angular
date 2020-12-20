import { Component, OnInit } from '@angular/core';
import {Personne} from '../model/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }
  showCvDetails(personne){
    this.selectedPersonne = personne;
  }

}
