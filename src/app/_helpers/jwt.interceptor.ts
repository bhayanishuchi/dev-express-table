import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    authToken: `${token}`
                }
            });
        } else {
            this.router.navigate(['/login']);
        }
        return next.handle(request);
    }
}
