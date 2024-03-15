import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CubiService} from "../../cubi/cubo.service";
import {catchError, EMPTY, exhaustAll, exhaustMap} from "rxjs";
import {Cubo} from "../../cubi/cubo";
import {map} from "rxjs/operators";
import {CubiApiActions} from "../actions/cubi.actions";

@Injectable()
export class CubiEffects{
  loadCubi$ = createEffect(() => this.actions$.pipe(
    ofType(CubiApiActions.caricaCubi),
    exhaustMap(() => this.cubiService.getCubi()
      .pipe(
        map(cubi => {
          return CubiApiActions.cubiCaricatiConSuccesso({listaCubi:cubi});
        }),
        catchError(() => EMPTY)
      )
    )));

  constructor(
    private  actions$: Actions,
    private cubiService: CubiService
  ) {}
}
