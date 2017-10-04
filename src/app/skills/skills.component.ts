import { Component, OnInit } from '@angular/core';
import { SkillService } from './_service/skill.service';
import { Skill } from '../_model/skill.model';


@Component({
  selector: 'nr-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  skills: Skill []  = [];

  isLoading$ = false;

  constructor(private _skillService: SkillService) { }

  ngOnInit() {
    this.isLoading$ = true ;
    this._skillService.list().subscribe(data => {
      this.skills = data;
      this.isLoading$ = false;
    });
  }

}
