import { Action } from "@ngrx/store";

export interface State {
  lanzamientos: any[];
  message: string;
}

export const initialState: State = {
  lanzamientos: [],
  message: ''
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
