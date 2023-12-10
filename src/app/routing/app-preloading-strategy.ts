import {PreloadingStrategy, Route} from "@angular/router";
import {flatMap, Observable, of, timer} from "rxjs";

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay: boolean) => delay ? timer(150).pipe(flatMap(_ => load())) : load();
        return route.data && route.data.preload ? loadRoute(route.data.delay) : of(null);
      }
}
