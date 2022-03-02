import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { userLoading, onChangeStatus } from '../../actions/userRolesPermissions';


export const AdminHomePage = () => {

  const dispatch = useDispatch();

  const { users } = useSelector(state => state?.users);

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

  useEffect(() => {
    dispatch(userLoading());
  }, [dispatch])



  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div className="card">
            <div class="card-header">
              Gestion de Usuarios
            </div>
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
                          {item.nombre_usuario}
                        </td>
                        <td>
                          {item.estado_usuario}
                        </td>
                        <td>
                          {item.rol}
                        </td>
                        <td>
                          {bottonAction(item)}
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
    </>
  );
};
