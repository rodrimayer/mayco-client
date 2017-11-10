import { AuthService } from '../_service/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestClientService } from '../_service/rest-client.service';
import { UsersService } from '../users/_service/users.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    UsersService,
    RestClientService,
    AuthService]
})
export class LoginModule { }
