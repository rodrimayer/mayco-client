import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    //FormsModule,
    //BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMD7H6eFUzdamKA6fHD0dO5xA9M0Z4EiM'
    })
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
