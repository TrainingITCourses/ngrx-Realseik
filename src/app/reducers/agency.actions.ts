import { Action } from '@ngrx/store';

export enum AgencyActionTypes {
  LoadAgencies = '[Agency] Load Agencys',
  Brake = '[Agency] Frenar'
}

export class LoadAgencies implements Action {
  readonly type = AgencyActionTypes.LoadAgencies;
}

export class Brake implements Action {
  readonly type = AgencyActionTypes.Brake;
}

export type AgencyActions = LoadAgencies | Brake;
