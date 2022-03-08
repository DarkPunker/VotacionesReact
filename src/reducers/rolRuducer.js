import { types } from "../types/types";

const initialState = {
  rols: [{
    idrol: 0,
    nombre_rol: '',
    descripcion_rol: '',
    estado_rol: ''
  }]
}

export const rolReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadedRols:
      return {
        ...state,
        rols: [...action.payload]
      }

    default:
      return state;
  }
}
