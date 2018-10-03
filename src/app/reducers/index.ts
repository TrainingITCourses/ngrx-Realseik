import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromAgency from "./agency.reducer";
import * as fromValor from "./valor.reducer";
import * as fromEstados from "./estados.reducer";
import * as fromLanzamientos from "./lanzamientos.reducer";
import * as fromCriterio from './criterio.reducer';

export interface GlobalState {
  estados: fromEstados.State;
  agency: fromAgency.State;
  valores: fromValor.State;
  lanzamientos: fromLanzamientos.State;
  criterios: fromCriterio.CriteriosState;

}

export const reducers: ActionReducerMap<GlobalState> = {
  estados: fromEstados.reducer,
  agency: fromAgency.reducer,
  valores: fromValor.reducer,
  lanzamientos: fromLanzamientos.reducer,
  criterios: fromCriterio.reducer,
};

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production
  ? []
  : [];
