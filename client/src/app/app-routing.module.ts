import { TemplateComponent } from './admin/template/template.component';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from 'guards/logged-in.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
    },
    {
        component: TemplateComponent,
        canActivate: [LoggedInGuard],
        path: 'dashboard',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
