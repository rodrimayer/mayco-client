import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { MailService } from './mail/_service/mail.service';
import { RestClientService } from '../_service/rest-client.service';
import { MailComponent } from './mail/mail.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    // FormsModule,
    // BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMD7H6eFUzdamKA6fHD0dO5xA9M0Z4EiM'
    }),
    HttpModule
  ],
  declarations: [ContactComponent, MailComponent],
  providers: [MailService, RestClientService],
  exports: [MailComponent]
})
export class ContactModule { }
