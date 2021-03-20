import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ErrorComponent} from 'src/app/shared/components/error/error.component';
import { AppComponent } from './app.component';
import { SignedGuard } from './core/guards/signed.guard';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'admin', loadChildren: () => import('./admin/admin.module') .then(m => m.AdminModule)},
      { path: '**', redirectTo: 'admin'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "ignore"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
