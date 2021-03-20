import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  @ViewChild("loginButton", {static: false}) loginButton: HTMLButtonElement;
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  navigate(route){
    this.router.navigate([`/admin/${route}`]);
    
  }
}
