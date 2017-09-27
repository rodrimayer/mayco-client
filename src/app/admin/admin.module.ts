import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestClientService } from '../_service/rest-client.service';
import { ProjectService } from '../projects/_service/project.service';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [AdminComponent],
  providers: [ProjectService, RestClientService]
})
export class AdminModule { }
