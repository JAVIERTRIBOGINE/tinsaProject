import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {SharedModule} from 'src/app/shared/shared.module'

@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class AdminModule { }
