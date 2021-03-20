import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { ContendDialogComponent } from 'src/app/shared/components/contend-dialog/contend-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService,
    public matDialog: MatDialog) {  }

  

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        mail: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]]
      }
    )
  }

  login() {
    console.log("submit register", this.loginForm);
    const email = this.loginForm.controls.mail.value;
    const password = this.loginForm.controls.password.value;
    this.authorizationService.login({email: email, password: password}).subscribe(
      result => {
        console.log("login: ", result);
        this.authorizationService.backendError = "logeado con éxito"
        this.authorizationService.logged = true;
      },
      (error) => 
      {console.error("error: ", error);
     
    },
    () => {
      this.matDialog.open(ContendDialogComponent, 
        {
          data: {
            title: "backend info: ",
            content:  this.authorizationService.backendError
          } 
        }
      );
    }
      
    )
  }

  isInvalid(control){
    // console.log("control: ", control);
    return control.status !== "VALID"
  }


}
