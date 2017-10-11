import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthService } from '../_service/auth.service';
import { SimpleAuthGuard } from '../_guard/index';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    ShellComponent,
    MainContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [ShellComponent],
  providers: [
    SimpleAuthGuard,
    AuthService
  ]
})
export class CoreModule { }
