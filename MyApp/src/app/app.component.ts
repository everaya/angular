import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'MyApp';
  name: string = "Eve";
  handleChange(value :string){
    this.name = value
  }
  handleClick(){
    this.name = "raya"
  }
}
