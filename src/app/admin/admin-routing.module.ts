import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './adminModules/characters/characters.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './adminModules/logout/logout.component';
import { ErrorComponent } from '../shared/components/error/error.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'characters', loadChildren: () => import('./adminModules/characters/characters.module') .then(m => m.CharactersModule)},
      { 
        path: 'login', 
        loadChildren: () => import('./adminModules/login/login.module') .then(m => m.LoginModule)
      },
      { path: 'error', component: ErrorComponent, pathMatch: 'full'},
      { path: 'logout', loadChildren: () => import('./adminModules/logout/logout.module') .then(m => m.LogoutModule) },
      { path: 'register', loadChildren: () => import('./adminModules/register/register.module') .then(m => m.RegisterModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
