import { CriteriosLoaded, CriterioActionTypes } from './criterio.actions';
import { DataService } from "./../services/data.service";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { mergeMap, map } from "../../../node_modules/rxjs/operators";

@Injectable()
export class CriterioEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(CriterioActionTypes.CriteriosLoaded)
    .pipe(
      mergeMap(() =>
        this.data
          .leerCriterios()
          .pipe(map(criterios => new CriteriosLoaded(criterios)))
      )
    );

  constructor(private actions$: Actions, private data: DataService) {}
}
