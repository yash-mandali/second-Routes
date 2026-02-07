import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { catchError,  throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authservice = inject(AuthService);
  const router = inject(Router);


  // Show loader when request starts


  // if (req.url.includes('/login')) {
  //   return next(req);
  // }

  const token = authservice.isLoggedIn();

  const authReq = token
    ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }) :
    req;

  return next(authReq).pipe(
    catchError(err => {
      if (err.status === 401) {
        authservice.Logout();
        router.navigate(['/login'])
       
      }
    
      return throwError(() => err)
    })

  )
};
