import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToDad = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('Fils component : Voici le contenue du propriété color de mon pére : ', this.filsProperty);
  }
  sendEvent(){
    this.sendRequestToDad.emit(
      'Please can i have some money :) ? '
    );
  }

}
