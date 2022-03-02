import { types } from "../types/types";

const initialState = {
  elections: [{
      ideleccion: '',
      nombre_eleccion: ''
  }]
};

export const electionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadedElections:
      return {
          ...state,
          elections: [...action.payload]
      }
    default:
      return state;
  }
}