import { CriterioActionTypes, CriterioActions } from "./criterio.actions";

export interface CriteriosState {
  criterios: any[];
}

export const initialState: CriteriosState = {
  criterios: []
};

export function reducer(state = initialState, action: CriterioActions): CriteriosState {
  switch (action.type) {
    case CriterioActionTypes.LoadCriterios:
      return { ...state };
    case CriterioActionTypes.CriteriosLoaded:
      return { criterios: action.payload };
    default:
      return state;
  }
}
