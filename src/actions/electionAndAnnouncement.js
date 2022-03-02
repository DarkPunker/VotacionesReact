import { fetchSinToken } from "../helpers/fetch"
import Swal from 'sweetalert2';
import { types } from "../types/types";

export const createElection = (nombre_eleccion, fecha_inicio, fecha_fin) => {
    return async () => {
        const resp = await fetchSinToken('eleccion/createelection', {
            nombre_eleccion,
            fecha_inicio,
            fecha_fin
        }, 'POST');
        const body = await resp.json();
        if (resp.ok && body.error != undefined) {
            Swal.fire('Error', body.error, 'error');
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 2000});
        }
    }
}

export const electionLoading = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('eleccion/elections');
        const body = await resp.json();
        dispatch(electionsLoaded(body))
  
    }
  }
  
  const electionsLoaded = (elections) => ({
    type: types.loadedElections,
    payload: elections
  })