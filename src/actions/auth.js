import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import Swal from 'sweetalert2';

export const login = (Username, Password) => {

    return async (dispath) => {
        const resp = await fetchSinToken('usuario/login', { Username, Password }, 'POST');
        const body = await resp.json();

        if (resp.ok && body.error != undefined) {
            Swal.fire('Error', body.error, 'error');
        } else {
            localStorage.setItem("name", body.nombre_usuario)
            localStorage.setItem("logged", true)
            dispath(authlogin({
                name: body.nombre_usuario
            }))
        }
    }
}

export const register = (
    numero_identificacion,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    telefono,
    direccion,
    nombre_usuario,
    contrasena
) => {
    return async () => {
        const resp = await fetchSinToken(
            'usuario/register',
            {
                numero_identificacion,
                primer_nombre,
                segundo_nombre,
                primer_apellido,
                segundo_apellido,
                telefono,
                direccion,
                nombre_usuario,
                contrasena
            }, 'POST');
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

export const authislogged = () => ({
    type: types.islogged,
})

const authlogin = (user) => ({
    type: types.login,
    payload: user
})

export const authlogout = () => {
    return (dispath) => {
        localStorage.clear();
        dispath(logout());
    }
}

const logout = () => ({
    type: types.logout
})

