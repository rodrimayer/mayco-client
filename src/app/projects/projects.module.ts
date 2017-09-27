import { HttpModule } from '@angular/http';
import { RestClientService } from '../_service/rest-client.service';
import { ProjectService } from './_service/project.service';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpModule
  ],
  declarations: [ProjectsComponent],
  providers : [ProjectService, RestClientService]
})
export class ProjectsModule { }
