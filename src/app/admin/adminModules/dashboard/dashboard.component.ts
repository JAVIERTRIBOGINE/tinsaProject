import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthorizationService) { }

  ngOnInit() {
  }

  navigate(route){
    this.router.navigate([`/admin/${route}`]);
    
  }

  get isLogged() {
    return this.authService.isLogged()
  }

}
