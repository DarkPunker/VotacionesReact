import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import Swal from 'sweetalert2';

export const onChangeStatus = (idusuario, nombre_usuario) =>{
  return async () =>{
    const resp = await fetchSinToken('usuario/changestatus',{idusuario, nombre_usuario},'PUT');
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

export const onChangeRol = (idusuario, idrol) =>{
  return async () =>{
    const resp = await fetchSinToken('usuario/changerol',{idusuario, idrol},'PUT');
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

export const userLoading = () => {
  return async (dispatch) => {
      const resp = await fetchSinToken('usuario');
      const body = await resp.json();
      dispatch(usersLoaded(body))

  }
}

const usersLoaded = (users) => ({
  type: types.loadedUsers,
  payload: users
})

export const rolsLoading = () => {
  return async (dispatch) => {
      const resp = await fetchSinToken('rolandpermiso/roles');
      const body = await resp.json();
      dispatch(rolsLoaded(body))

  }
}

const rolsLoaded = (rols) => ({
  type: types.loadedRols,
  payload: rols
})