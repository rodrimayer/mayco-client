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
        path: 'services',
        loadChildren: './../services/services.module#ServicesModule'
    },
    {
        path: 'admin',
        loadChildren: './../admin/admin.module#AdminModule'
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
