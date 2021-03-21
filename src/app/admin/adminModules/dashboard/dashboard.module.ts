import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatCardModule, MatIconModule, MatButtonModule, CommonModule, RouterModule.forChild([{path: '', component: DashboardComponent, pathMatch: 'true'}])
  ]
})
export class DashboardModule { }
