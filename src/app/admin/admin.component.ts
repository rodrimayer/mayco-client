import { Component, OnInit } from '@angular/core';

import { Project } from '../_model/project.model';
import { ProjectService } from '../projects/_service/project.service';

@Component({
  selector: 'nr-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  private project_aux: Project = { name: '' };

  private base64textString = '';


  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
  }


  // ----- ChooseFile and convert to base64 ------
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
  // -------------------------------------------------- !


  upload(): void {
    this.project_aux.imageEncoded = this.base64textString;
    // Subir imagen
    // this._projectService.

    if (this.base64textString !== '' && this.project_aux.name !== '') {
      this._projectService.insert(this.project_aux).subscribe(data => {
      });

      console.log('project_aux');
      console.log(this.project_aux);

      // clean obj.
      this.project_aux = { name: '', imageEncoded: null, imageDecoded: null };

      this.base64textString = '';


    } else {
      alert('No se ingresó nombre o imagen del proyecto, revise sus datos.');
    }

  }
}
