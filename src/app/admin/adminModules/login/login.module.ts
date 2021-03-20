import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule, MatDialogModule, FormsModule, CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, RouterModule.forChild([{path:'', component: LoginComponent, pathMatch:'full'}])
  ]
})
export class LoginModule { }
