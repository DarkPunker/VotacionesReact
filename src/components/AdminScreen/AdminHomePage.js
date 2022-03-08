import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { userLoading, onChangeStatus, onChangeRol } from '../../actions/userRolesPermissions';
import { rolsLoading } from '../../actions/userRolesPermissions';


export const AdminHomePage = () => {

  const dispatch = useDispatch();

  const { users } = useSelector(state => state?.users);
  const { rols } = useSelector(state => state?.rols);

  useEffect(() => {
    dispatch(userLoading());
    dispatch(rolsLoading());
  }, [dispatch])

  const bottonAction = (user) => {
    switch (user.estado_usuario) {
      case "activo":
        return <button type="button" class="btn btn-primary" onClick={() => changeStatus(user)}>desactivar</button>
      case "inactivo":
        return <button type="button" class="btn btn-primary" onClick={() => changeStatus(user)}>activar</button>
    }
  }
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const changeStatus = (user) => {
    swalWithBootstrapButtons.fire({
      title: 'Estas segur@?',
      text: "¡Los cambios seran realizados en el proximo inicio de sesion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, Modificarlo!',
      cancelButtonText: '¡No, cancela!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        return dispatch(onChangeStatus(user.idusuario, user.nombre_usuario));
      }
    })
  }

  const roles = () =>{
    const aux = {}
    for (let i = 0; i < rols.length; i++) {
      aux[rols[i].idrol] = `${rols[i].nombre_rol}`
      
    }
    return aux;
  }

  const changeRol = (id) => {
    Swal.fire({
      title: 'Cambiar de Rol',
      input: 'select',
      inputOptions: {
        'Roles': roles()
      },
      inputPlaceholder: 'Seleccione un Rol',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (rol) => {
        return dispatch(onChangeRol(id, rol))
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }

  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div className="card">
            <div class="card-header">
              Gestion de Usuarios
            </div>
            <div class="table-responsive">
              <div class="card-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Rol</th>
                    <th>Accion</th>
                  </thead>
                  <tbody>
                    {
                      users.length > 0 && users.map(item => {
                        return <tr class="table-active">
                          <td>
                            {item.user.nombre_usuario}
                          </td>
                          <td>
                            {item.user.estado_usuario}
                          </td>
                          <td>
                            {item.rol.nombre_rol}
                          </td>
                          <td>
                            {bottonAction(item.user)}
                            <button type="button" class="btn btn-outline-success" onClick={() => changeRol(item.user.idusuario)}>Cambiar Rol</button>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
