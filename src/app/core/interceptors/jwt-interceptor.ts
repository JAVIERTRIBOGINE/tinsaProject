import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

// Helper para poder mandar el token en la cabecera
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthorizationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.endsWith('users') && !request.url.endsWith('login')) {

      // add authorization header with jwt token if available
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      if (currentUser) {
        const usertoken = currentUser.usertoken;
        if (usertoken) {
        //   request = request.clone({
        //     setHeaders: {
        //       'x-access-token': usertoken
        //     }
        //   });
        // }
        console.log("puede acceder: TIENE TOKEN");
        
      }else{
       console.log("no tiene token");
       this.router.navigate(['admin/error'])
      } 
      }
    }
    if (request.url.endsWith('login')) {

      console.log("request", request);
      
      // add authorization header with jwt token if available
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      if (currentUser) {
        console.log("ya tiene token");
        this.router.navigate(['admin/dashboard'])
      }
    }
    return next.handle(request).pipe(catchError((error, caught) => {
      console.log("interceptor coge error:", error);
      // intercept the respons error and displace it to the console
      this.handleAuthError(error);
      return of(error);
    }) as any);
  
}
  
 private handleAuthError(err): Observable<any> {
    
    // handle your auth error or rethrow
    if (err.status === 403) {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/error']);
    }
    
    if (err.status === 400) {
      this.authService.backendError = err.error
      console.log(err.error);
      
      localStorage.clear();
      sessionStorage.clear();
    }
    
    if (err.status === 401) {
      // Delete localStorage and redirect to login
      localStorage.clear();
      sessionStorage.clear();
      
      this.router.navigate(['/error']);
      // if you've caught / handled the error, you don't want to rethrow it unless 
      // you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }
    
  }
}