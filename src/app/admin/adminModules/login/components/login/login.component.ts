import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { UtilsService } from 'src/app/core/services/utils.service';
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
    public matDialog: MatDialog,
    private router: Router,
    private utilsService: UtilsService
    ) {  }

  

  ngOnInit() {
    if (this.utilsService.validToken()) {
      this.authorizationService.logged = true;
      this.router.navigate(['admin/characters']);
    }
    this.loginForm = this.fb.group(
      {
        mail: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]]
      }
    )
  }

  login() {
    const email = this.loginForm.controls.mail.value;
    const password = this.loginForm.controls.password.value;
    this.authorizationService.login({email: email, password: password}).subscribe(
      result => {
        this.authorizationService.backendError = "logeado con éxito"
        this.authorizationService.logged = true;
      },
      (error) => 
      {
        this.authorizationService.logged = false;
        console.log("error: ", error);
        
      },
      () => {
        const dialog = this.matDialog.open(ContendDialogComponent, 
          {
            data: {
              title: "backend info: ",
              content:  this.authorizationService.backendError 
            } 
          }
          );
        dialog.afterClosed().subscribe(result=> this.router.navigate(['admin/characters']));
        this.loginForm.reset();
    }
      
    )
  }

  isInvalid(control){
    // console.log("control: ", control);
    return control.status !== "VALID"
  }


}
