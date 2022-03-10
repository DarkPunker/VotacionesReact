import { fetchSinToken } from "../helpers/fetch"
import Swal from 'sweetalert2';
import { types } from "../types/types";

export const onSavePostulation =(convocatoria, username, fechaactual)=>{
  return async () => {
    const resp = await fetchSinToken('convocatoria/createpostulation', { convocatoria, username, fechaactual }, 'POST');
    const body = await resp.json();
    if (resp.ok && body.error != undefined) {
      Swal.fire('Error', body.error, 'error');
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: body.message,
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
}

export const onSaveAnnouncement = (nombre_convocatoria, fecha_inicio, fecha_fin, cargo, eleccion, req) => {
  return async () => {
    const resp = await fetchSinToken('convocatoria/createrannounament', { nombre_convocatoria, fecha_inicio, fecha_fin, cargo, eleccion, req }, 'POST');
    const body = await resp.json();
    if (resp.ok && body.error != undefined) {
      Swal.fire('Error', body.error, 'error');
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: body.message,
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
}

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
        timer: 2000
      });
    }
  }
}

export const onChangeElection = (ideleccion, nombre_eleccion, fecha_inicio, fecha_fin) => {
  return async () => {
    const resp = await fetchSinToken('eleccion/changeelection', { ideleccion, nombre_eleccion, fecha_inicio, fecha_fin }, 'PUT');
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

export const announcementLoading = () => {
  return async (dispatch) => {
    const resp = await fetchSinToken('convocatoria/announcements');
    const body = await resp.json();
    dispatch(announcementsLoaded(body))

  }
}

const announcementsLoaded = (announcements) => ({
  type: types.loadedAnnouncements,
  payload: announcements
})

export const postulationLoading = (id) => {
  return async (dispatch) => {
    const resp = await fetchSinToken('convocatoria/postulations/'+id+'');
    const body = await resp.json();
    dispatch(postulationsLoaded(body))

  }
}

const postulationsLoaded = (postulations) => ({
  type: types.loadedPostulations,
  payload: postulations
})

export const onChangeStatusCand=(id)=>{
  return async () =>{
    const resp = await fetchSinToken('convocatoria/changestatus',{id},'PUT');
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