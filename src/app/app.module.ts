import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


@NgModule({

  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCg9xi02o0YVJOTuxswHU3LO9B-BbOy3fo'
    })
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
