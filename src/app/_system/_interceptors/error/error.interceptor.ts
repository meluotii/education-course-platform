import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof ErrorEvent) {
          console.log('this is an error in the code');
        } else if (err.status === 400 || err.status === 404) {
          this.router.navigateByUrl('/page-not-found')
        } else if (err.InternalServerError) {
          alert('this is server error')
        }
        return throwError(err);
      }),
    );
  }
}
