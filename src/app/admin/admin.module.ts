import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RestClientService } from '../_service/rest-client.service';
import { ProjectService } from '../projects/_service/project.service';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';

import { SkillService } from '../skills/_service/skill.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [AdminComponent, AdminSkillsComponent, AdminProjectsComponent],
  providers: [ProjectService, SkillService, RestClientService]
})
export class AdminModule { }
