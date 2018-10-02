import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValorActionTypes, SaveValors } from './valor.actions';
import { ApiService } from '../services/api.service';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class ValorEffects {

  @Effect()
  public save$ = this.actions$.ofType(ValorActionTypes.SaveValors)
    .pipe(
      mergeMap((action: SaveValors) =>
        this.api.post$(action.payload)
      )
    );

  constructor(
    private api: ApiService,
    private actions$: Actions) { }
}
