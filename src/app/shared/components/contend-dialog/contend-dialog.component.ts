import { Component, Inject, OnInit } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-contend-dialog',
  templateUrl: './contend-dialog.component.html',
  styleUrls: ['./contend-dialog.component.scss']
})
export class ContendDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
