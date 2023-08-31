import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(readonly router: Router) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        let newRequest;
        if(!request.url.includes('/auth/authenticate') && !request.url.includes('/auth/logout')) {
            const token = sessionStorage.getItem("token");
            newRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        } else {
            newRequest = request.clone()
        }

        return next.handle(newRequest);
    }
}