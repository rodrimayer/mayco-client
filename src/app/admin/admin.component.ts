import { Component, OnInit } from '@angular/core';

import { Project } from '../_model/project.model';
import { ProjectService } from '../projects/_service/project.service';




@Component({
  selector: 'nr-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  inputFile: string = '';

  projects: Project[] = [];

  isLoading$ = false;

  project_aux: Project = { name: '' };

  base64textString = '';


  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
  }

  evt1=null;

  // ----- ChooseFile and convert to base64 ------
  handleFileSelect(evt) {
    
    console.log();

    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }

    this.evt1=evt;
  }
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
  // -----------------PROJECTS--------------------------------- !
  // Estos metodos los podriamos tener en un servicio aparte.

  uploadProject(): void {
    


    
    this.project_aux.imageEncoded = this.base64textString;
    // Subir imagen
    // this._projectService.

    if (this.base64textString !== '' && this.project_aux.name !== '') {
      this._projectService.insert(this.project_aux).subscribe(data => {

        if (data.status === 201) {
          alert('Proyecto cargado correctamente');
          console.log('project_aux');
          console.log(this.project_aux);

          // clean
          this.project_aux = { name: '', imageEncoded: null, imageDecoded: null };
          this.base64textString = '';

          this.evt1.srcElement.value='';


        } else {
          alert('El proyecto no pudo ser cargado -- http code ${data.status}');
        }

      });



    } else {
      alert('No se ingresó nombre o imagen del proyecto, revise sus datos.');
    }

  }

  listProjects(): void {
    this.isLoading$ = true;
    this._projectService.listData().subscribe(
      data => {
        this.projects = data;
        this.isLoading$ = false;
      }
    );

  }

  deleteProject(id: number): void {

  }

  // -----------------SERVICES--------------------------------- !
  // Estos metodos los podriamos tener en un servicio aparte.


}

