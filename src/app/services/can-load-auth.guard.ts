import { Injectable } from "@angular/core";
import { CanLoad, GuardResult, MaybeAsync, Route, Router, UrlSegment } from "@angular/router";
import { AuthStore } from "./auth.store";
import { first, tap } from "rxjs/operators";

@Injectable()
export class CanLoadAuthGuard implements CanLoad {

    constructor(private auth: AuthStore, private router: Router) {}

    canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        return this.auth.isLoggedIn$.pipe(
            first(),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }
}