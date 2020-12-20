import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../model/Personne';
import {CvService} from '../cv.service';
import {EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() personne: Personne;
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }
  embaucherDetails(personne: Personne){
    this.embaucheService.embaucher(personne);
    console.log(this.embaucheService.getEmbauchees());
  }

}
