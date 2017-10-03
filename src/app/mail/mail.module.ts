import { MailService } from './_service/mail.service';
import { MailRoutingModule } from './mail-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MailComponent } from './mail.component';
import { RestClientService } from '../_service/rest-client.service';


@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    HttpModule
  ],
  declarations: [MailComponent],
  providers: [MailService, RestClientService]
})
export class MailModule { }
