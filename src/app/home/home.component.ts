import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //PATH_LOGO = '../../assets/logo.png';
  //PATH_LOGO = '../../../dist/assets/logo.png';
  PATH_LOGO = 'assets/logo.png';
  //PATH_LOGO  = 'logo.png';
  constructor() { }

  ngOnInit() {
  }

}
