import { Component, OnInit } from '@angular/core';
import {Form} from '@angular/forms';
import {Personne} from '../model/Personne';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  personne: Personne;
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addPersonne(formulaire){
    const link = [''];
    console.log(formulaire.value);
    this.personne = formulaire.value;
    this.personne.id = this.cvService.getPersonnes()[this.cvService.getPersonnes().length - 1].id + 1;
    this.cvService.addPersonne(this.personne);
    this.router.navigate(link);
  }

}
