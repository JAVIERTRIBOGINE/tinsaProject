import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { ContendDialogComponent } from './components/contend-dialog/contend-dialog.component';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ErrorComponent, ContendDialogComponent],
  imports: [
    CommonModule, MatIconModule, MatCardModule, MatButtonModule
  ],
  entryComponents: [ ContendDialogComponent],
  exports:[ErrorComponent, ContendDialogComponent]
})
export class SharedModule { }
