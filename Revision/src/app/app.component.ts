import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Revision';
  bgColor = 'yellow';
  show = true;
  changeStatus(): void {
    this.show = !this.show;
  }
}
