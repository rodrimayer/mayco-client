import { Component, OnInit } from '@angular/core';

import { Project } from '../_model/project.model';
import { ProjectService } from './_service/project.service';

@Component({
  selector: 'nr-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private _projectService: ProjectService) { }

  isLoading$ = false;

  ngOnInit() {

    this.isLoading$ = true ;

    this._projectService.listData().subscribe(

      data => {
        this.projects = data;
        this.isLoading$ = false;
      }
      /*,error => {
        this.error = error;
      },*/
      /*complete => {
        this.isLoading$ = (false);
      }*/  // NO FUNCIONÓ complete

    );
  }





}
