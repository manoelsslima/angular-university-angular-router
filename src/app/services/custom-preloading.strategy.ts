import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<Observable<any> | null> {
        if (route.data?.["preload"]) { // if preload property is true
            // load the preload lazy module associated to this route
            return load();
        } else {
            of(null); // observable emits the value null
        }
    }

}