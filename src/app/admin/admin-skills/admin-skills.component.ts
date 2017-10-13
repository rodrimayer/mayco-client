import { Component, OnInit } from '@angular/core';

import { Project } from '../../_model/project.model';
import { SkillService } from '../../skills/_service/skill.service';

import { Skill } from '../../_model/skill.model';

@Component({
  selector: 'nr-admin-skills',
  templateUrl: './admin-skills.component.html'
})
export class AdminSkillsComponent implements OnInit {

  inputFile = '';

  skills: Skill[] = [];

  isLoading$ = false;

  skill_aux: Skill = { name: '', description: '' };

  publicando = false ;

  constructor(private _skillService: SkillService) { }

  ngOnInit() {
  }

  uploadSkill(): void {
    this.publicando = true;
    if (this.skill_aux.name !== '' && this.skill_aux.description !== '') {
      this._skillService.insert(this.skill_aux).subscribe(data => {

        if (data.status === 201) {
          alert('Servicio cargado correctamente');

          // clean
          this.skill_aux = { name: '', description: '' };

        } else {
          alert('El servicio no pudo ser cargado -- http code ${data.status}');
        }

        this.publicando = false;
      });



    } else {
      alert('No se ingresó nombre de servicio, revise sus datos.');
      this.publicando = false;
    }

  }

  listSkills(): void {
    this.isLoading$ = true;
    this._skillService.list().subscribe(
      data => {
        this.skills = data;
        this.isLoading$ = false;
      }
    );

  }

  deleteSkill(index: number): void {
    this._skillService.delete(this.skills[index]).subscribe(data => {
      if (data.status === 200) {
        alert('Servicio eliminado correctamente');
        this.skills.splice(index, 1);
      } else {
        alert('El servicio no pudo ser eliminado');
      }


    });
  }


  updateDescription(description: string): void {
    if (description.length > 254) {
      this.skill_aux.description = description.substring(0, 251) + '...';
    } else {
      this.skill_aux.description = description;
    }

  }

}

