import { Component, OnInit } from '@angular/core';
import {EmbaucheService} from '../embauche.service';
import {Personne} from '../model/Personne';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personnes: Personne[];
  constructor(private embaucheService: EmbaucheService) {
    this.personnes = [];
  }

  ngOnInit(): void {
    this.personnes = this.embaucheService.getEmbauchees();
  }
  debaucher(personne: Personne): void{
    this.embaucheService.debaucher(personne);
  }

}
