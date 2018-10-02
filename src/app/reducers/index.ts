import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAgency from './agency.reducer';
import * as fromValor from './valor.reducer';

export interface State {

  agency: fromAgency.State;
  valor: fromValor.State;
}

export const reducers: ActionReducerMap<State> = {

  agency: fromAgency.reducer,
  valor: fromValor.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
