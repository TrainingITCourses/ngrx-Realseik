import { Action } from "@ngrx/store";

export enum LanzamientosActionTypes {
  LoadLanzamientos = "[Lanzamientos] Load Lanzamientos",
  LanzamientosSaved = "[Lanzamientos] Lanzamientos Saved"
}

export class LoadLanzamientos implements Action {
  readonly type = LanzamientosActionTypes.LoadLanzamientos;
  constructor(readonly payload: any[]) {}
}

export class LanzamientosSaved implements Action {
  readonly type = LanzamientosActionTypes.LanzamientosSaved;
  constructor(readonly payload: any[]) {}
}

export type LanzamientosActions = LoadLanzamientos | LanzamientosSaved;
