import { SimpleAuthGuard } from '../_guard';
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
        path: 'contact',
        loadChildren: './../contact/contact.module#ContactModule'
    },
    {
        path: 'admin',
        loadChildren: './../admin/admin.module#AdminModule',
        canActivate: [SimpleAuthGuard]
    },
    {
        path: 'users',
        loadChildren: './../users/users.module#UsersModule',
        canActivate: [SimpleAuthGuard]
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
