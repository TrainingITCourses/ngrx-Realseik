import { Action } from '@ngrx/store';

export enum EstadosActionTypes {
  LoadEstadoss = '[Estados] Load Estados'
}

export class LoadEstadoss implements Action {
  readonly type = EstadosActionTypes.LoadEstadoss;
}

export type EstadosActions = LoadEstadoss;
