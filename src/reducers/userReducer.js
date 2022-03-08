import { types } from "../types/types";

const initialState = {
  users: [{
    rol: {
      descripcion_rol: "",
      estado_rol: "",
      idrol: 0,
      nombre_rol: "",
    },
    user: {
      idusuario: 0,
      nombre_usuario: '',
      contrasena: '',
      estado_usuario: '',
    }
  }]
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadedUsers:
      return {
        ...state,
        users: [...action.payload]
      }

    default:
      return state;
  }
}