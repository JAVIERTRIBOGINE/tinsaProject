import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import {RouterModule } from '@angular/router';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule, 
    MatTableModule, 
    RouterModule.forChild([{path: '', component: CharactersComponent, pathMatch:'full' }]),
    CdkTableModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
    
  ]
})
export class CharactersModule { }
