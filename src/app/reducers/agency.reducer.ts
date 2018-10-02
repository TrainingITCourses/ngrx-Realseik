import { AgencyActions, AgencyActionTypes } from './agency.actions';


export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: AgencyActions): State {
  switch (action.type) {
    case AgencyActionTypes.LoadAgencies:
      break;

    case AgencyActionTypes.Brake:
      break;

    default:
      return state;
  }
}
