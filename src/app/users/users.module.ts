import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestClientService } from '../_service/rest-client.service';
import { UsersService } from './_service/users.service';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent],
  providers: [UsersService, RestClientService]
})
export class UsersModule { }
