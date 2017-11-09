import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  // PATH_LOGO = 'assets/logo.png';

  title: string = 'GOOGLE MAPS OF MA&CO';
  //lat: number = -23.8133193;
  lat: number = -23.799937;
  //lng: number = -64.7936981;
  lng: number = -64.782404;
  zoom: number = 17;
  constructor() { }


  ngOnInit() {
  }

}
