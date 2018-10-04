import { ValorActions, ValorActionTypes } from "./valor.actions";

export interface State {
  valores: any[];
  message: string;
}

export const initialState: State = {
  valores: [],
  message: ""
};

export function reducer(state = initialState, action: ValorActions): State {
  switch (action.type) {
    case ValorActionTypes.LoadValors:
      return { ...state };
    case ValorActionTypes.SaveValors:
      return state;
    case ValorActionTypes.Saved:
      state.valores = action.payload;
      return { ...state };
    case ValorActionTypes.NotSaved:
      this.message = action.payload;
      break;
    default:
      return state;
  }
}
