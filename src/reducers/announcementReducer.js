import { types } from "../types/types";
const initialState = {
  announcements: [{
    conv: {
      idconvocatoria: 0,
      nombre_convocatoria: "",
      fecha_inicio_convocatoria: "",
      fecha_fin_convocatoria: "",
      idcargo: 0,
      ideleccion: 0,
    },
    cargo: {
      idcargo: 0,
      nombre_cargo: "",
    }, 
    reqs: {
      idrequisito: 0,
      nombre_requisito: "0",
    }
  }]
}

export const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadedAnnouncements:
      return {
        ...state,
        announcements: [...action.payload]
      }
    default:
      return state;
  }
}