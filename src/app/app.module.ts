import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CompanyComponent, HomeComponent],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
