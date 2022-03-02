import { fetchSinToken } from "../helpers/fetch"
import Swal from 'sweetalert2';
import { types } from "../types/types";

export const createPosition = (nombre_cargo) => {
    return async () => {
        const resp = await fetchSinToken('convocatoria/createposition', { nombre_cargo }, 'POST');
        const body = await resp.json();
        if (resp.ok && body.error != undefined) {
            Swal.fire('Error', body.error, 'error');
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 2000
            });
        }
    }
}
export const onModifyRequitement = (idrequisito, nombre_requisito) => {
    return async () => {
        const resp = await fetchSinToken('convocatoria/modifyrequirement', { idrequisito, nombre_requisito }, 'PUT');
        const body = await resp.json();
        if (resp.ok && body.error != undefined) {
            Swal.fire('Error', body.error, 'error');
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 2000
            });
        }
    }
}

export const onModifyPositon = (idcargo, nombre_cargo) => {
    return async () => {
        const resp = await fetchSinToken('convocatoria/modifyposition', { idcargo, nombre_cargo }, 'PUT');
        const body = await resp.json();
        if (resp.ok && body.error != undefined) {
            Swal.fire('Error', body.error, 'error');
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 2000
            });
        }
    }
}

export const createRequirement = (nombre_requisito) => {
    return async () => {
        const resp = await fetchSinToken('convocatoria/createrequirement', { nombre_requisito }, 'POST');
        const body = await resp.json();
        if (resp.ok && body.error != undefined) {
            Swal.fire('Error', body.error, 'error');
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 2000
            });
        }
    }
}

export const positionLoading = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('convocatoria/positions');
        const body = await resp.json();
        dispatch(positionsLoaded(body))

    }
}

const positionsLoaded = (positions) => ({
    type: types.loadedPosition,
    payload: positions
})

export const requirementLoading = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('convocatoria/requirements');
        const body = await resp.json();
        dispatch(requirementsLoaded(body))
    }

}

const requirementsLoaded = (requirements) => ({
    type: types.loadedRequirement,
    payload: requirements
})

// export const onSaveAnnouncement = (data) => {
//     return async () => {
//         const resp = await fetchSinToken('convocatoria/createrannounament', { data }, 'POST');
//     }
// }