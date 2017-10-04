import { HttpModule } from '@angular/http';
import { SkillService } from './_service/skill.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';

import { SkillsRoutingModule } from './skills-routing.module';
import { RestClientService } from '../_service/rest-client.service';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule,
    HttpModule
  ],
  declarations: [SkillsComponent],
  providers: [SkillService, RestClientService]
})
export class SkillsModule { }
