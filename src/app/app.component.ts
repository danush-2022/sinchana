import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:Router){}
  title = 'mean-project';
  //userForm:FormGroup;

  


}
