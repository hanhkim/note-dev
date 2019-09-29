import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeRegionComponent } from './modules/home-region/home-region.component';
import { NewNoteComponent } from './modules/new-note/new-note.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeRegionComponent,
        children: [
            {
                path: "dashboard",
                component: DashboardComponent
            },
            {
                path: "note/:idGroup",
                component: NewNoteComponent
            },
            {
                path: "note/:idGroup/:id",
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
