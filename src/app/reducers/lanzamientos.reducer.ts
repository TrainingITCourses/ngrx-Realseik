import {
  LanzamientosActionTypes,
  LanzamientosActions
} from "./lanzamientos.actions";

export interface State {
  lanzamientos: any[];
  message: string;
}

export const initialState: State = {
  lanzamientos: [],
  message: ""
};

export function reducer(
  state = initialState,
  action: LanzamientosActions
): State {
  switch (action.type) {
    case LanzamientosActionTypes.LoadLanzamientos:
      return { ...state };
    case LanzamientosActionTypes.LanzamientosSaved:
      state.lanzamientos = action.payload;
      return { ...state };
    default:
      return state;
  }
}
