import { types } from "../types/types";

const initialState = {
  elections: [{
    ideleccion: '',
    nombre_eleccion: '',
    fecha_inicio: '',
    fecha_fin: '',
    numero_votos: 0,
    numero_votos_blanco: 0,
    estado_eleccion: ''
  }],
  election: {
    ideleccion: '',
    nombre_eleccion: '',
    fecha_inicio: '',
    fecha_fin: ''
  }
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