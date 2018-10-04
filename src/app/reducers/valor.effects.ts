import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValorActionTypes, LoadValors, Saved } from './valor.actions';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from '../services/data.service';


@Injectable()
export class ValorEffects {

  @Effect()
  public save$ = this.actions$
    .ofType(ValorActionTypes.LoadValors)
    .pipe(
      mergeMap((action: LoadValors) =>
        this.data
          .leerValoresCriterio(action.payload)
          .pipe(map(valores => new Saved(valores)))

      )
    );

  constructor(private actions$: Actions, private data: DataService) { }

}
