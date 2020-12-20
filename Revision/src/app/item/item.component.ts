import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  showCvDetails(): void{
    // TODO Emettre un evenement et y injecter la personne
    this.selectedPersonne.emit(
      this.personne
    );
  }

}
