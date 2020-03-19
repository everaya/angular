import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class= "app">
      <div>
        <button (click) = "handleClick()" >
          Change name
        </button>
        <input
          type = "text"
          [ngModel] = "name"
          (ngModelChange) = "handleChange($event)"
          >
      </div>
      <div> {{name}} </div>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = "Eve";
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = false;
  logo: string = 'img/logo.svg';
  handleChange(value : string){
    this.name = value;
  }

  handleClick(event : any){
    this.name = "Raya"
  }

  constructor() {
    this.title = 'Ultimate course';
  }
}
