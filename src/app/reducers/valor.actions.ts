import { Action } from '@ngrx/store';

export enum ValorActionTypes {
  LoadValors = '[Valor] Load Valors',
  SaveValors = '[Valor] Save Valors',
  Saved = '[Valor] Saved',
  NotSaved = '[Valor] Not Saved'
}

export class LoadValors implements Action {
  readonly type = ValorActionTypes.LoadValors;
}

export class SaveValors implements Action {
  readonly type = ValorActionTypes.SaveValors;
  constructor(public readonly payload?: any[]) { }
}

export class Saved implements Action {
  readonly type = ValorActionTypes.Saved;
  constructor(public readonly payload?: any[]) { }
}

export class NotSaved implements Action {
  readonly type = ValorActionTypes.NotSaved;
  constructor(public readonly payload?: any[]) { }
}

export type ValorActions = LoadValors | SaveValors | Saved | NotSaved;
