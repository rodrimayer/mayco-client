import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //PATH_LOGO = '../../assets/logo.png';
  PATH_LOGO  = 'src/assets/logo.png';
  constructor() { }

  ngOnInit() {
  }

}
