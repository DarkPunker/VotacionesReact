import { types } from "../types/types";

const initialState = {
  postulations: [{
    pers: {
      idpersona: 0,
      numero_identificacion: "",
      primer_nombre: "",
      segundo_nombre: "",
      primer_apellido: "",
      segundo_apellido: "",
    },
    cand: {
      idcandidato: 0,
      estado_participante: "",
      numero_participante: 0,
    },
    conv: {
      idconvocatoria: 0,
      nombre_convocatoria: "",
    },
    elecc: {
      ideleccion: 0,
      nombre_eleccion: "",
    }
  }]
}

export const postulationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadedPostulations:
      return {
        ...state,
        postulations: [...action.payload]
      }

    default:
      return state;
  }
}