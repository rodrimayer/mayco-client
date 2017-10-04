import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './../home/home.module#HomeModule'
    },
    {
        path: 'company',
        loadChildren: './../company/company.module#CompanyModule'
    },
    {
        path: 'projects',
        loadChildren: './../projects/projects.module#ProjectsModule'
    },
    {
        path: 'skills',
        loadChildren: './../skills/skills.module#SkillsModule'
    },
    {
        path: 'admin',
        loadChildren: './../admin/admin.module#AdminModule'        
    },
    {
        path: 'contact',
        loadChildren: './../contact/contact.module#ContactModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule { }
