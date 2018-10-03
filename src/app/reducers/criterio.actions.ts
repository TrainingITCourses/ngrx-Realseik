import { Action } from "@ngrx/store";

export enum CriterioActionTypes {
  LoadCriterios = "[Criterio] Load Criterios",
  CriteriosLoaded = "[Criterio] Criterios Loaded"
}

export class LoadCriterios implements Action {
  readonly type = CriterioActionTypes.LoadCriterios;
}

export class CriteriosLoaded implements Action {
  readonly type = CriterioActionTypes.CriteriosLoaded;
  constructor(readonly payload: any[]) {}
}

export type CriterioActions = LoadCriterios | CriteriosLoaded;
