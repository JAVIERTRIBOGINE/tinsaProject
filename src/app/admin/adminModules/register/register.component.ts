import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { MatDialog } from '@angular/material/dialog';
import { ContendDialogComponent } from 'src/app/shared/components/contend-dialog/contend-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private authorizationService: AuthorizationService,
    public matDialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit() {

        this.registerForm = this.fb.group(
      {
        mail: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]],
        creationDate: [""]
      }
    )
  }

  register() {
    console.log("submit register", this.registerForm);
    const email = this.registerForm.controls.mail.value;
    const password = this.registerForm.controls.password.value;
    const creationDate = new Date().toISOString();
    this.authorizationService.register({email: email, password: password, creationDate: creationDate}).subscribe(
      result => {
        console.log("post: ", result);
        sessionStorage.setItem('currentUser', JSON.stringify({usertoken: result['accessToken'], creationDate: creationDate}));
        this.authorizationService.backendError = "registro Insertado con éxito"
        this.authorizationService.logged = true;
      },
      (error) => 
      {console.error("error: ", error);
     
    },
    () => {
      // this.authorizationService.logged = true;
      const dialog = this.matDialog.open(ContendDialogComponent, 
        {
          data: {
            title: "backend info: ",
            content:  this.authorizationService.backendError
          } 
        }
      );
      dialog.afterClosed().subscribe(result=> this.router.navigate(['admin/characters']));
    }
      
    )
  }

  isInvalid(control){
    return control.status !== "VALID"
  }



  // isRequired(control){
  //   return control.status !== "VALID"
  // }
}
