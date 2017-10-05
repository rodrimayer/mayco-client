import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  // PATH_LOGO = 'assets/logo.png';

  title: string = 'GOOGLE MAPS OF MA&CO';
  lat: number = -23.8133193;
  lng: number = -64.7936981;
  zoom: number = 16;
  constructor() { }


  ngOnInit() {
  }

}
