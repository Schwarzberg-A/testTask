import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible: boolean = false;


  unvisible() {
    this.isVisible = false
  }
  visible() {
    this.isVisible = true
  }

  visibleToggle() {
    this.isVisible = !this.isVisible
  }
  constructor() {}


}


