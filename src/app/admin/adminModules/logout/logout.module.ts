import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: LogoutComponent, pathMatch: 'full'}]),
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LogoutModule { }
