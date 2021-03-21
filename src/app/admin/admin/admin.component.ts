import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  @ViewChild("loginButton", {static: false}) loginButton: HTMLButtonElement;
  constructor( private router: Router, private route: ActivatedRoute, private authService: AuthorizationService ) { 
      //  params.subscribe(data => console.log(data));
  }
  urlRoute: string = this.router.url;
  
  
  ngOnInit() {
    console.log("urlRoute: ", this.route.pathFromRoot);
  }

  navigate(route){
    this.router.navigate([`/admin/${route}`]);
    
  }

  get isLogged() {
    return this.authService.isLogged()
  }
}
