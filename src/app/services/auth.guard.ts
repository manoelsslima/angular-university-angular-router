import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { ActivatedRouteSnapshot, CanActivate, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthStore,
        private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<boolean | UrlTree> {
        return this.auth.isLoggedIn$
            .pipe(
                map(loggedIn => loggedIn ? true : this.router.parseUrl('/login'))
            )
    }
}