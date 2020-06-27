import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()

export class AuthGuardService implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate() {
        const userDetails = JSON.parse(localStorage.getItem("viuDocUserEmail"));
        if (!userDetails) {
            return this.router.navigate(['/auth']);
        }
        else {
            return true;
        }
    }
}