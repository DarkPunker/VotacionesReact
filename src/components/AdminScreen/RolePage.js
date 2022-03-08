import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { rolsLoading } from '../../actions/userRolesPermissions';


export const RolePage = () => {

  const dispatch = useDispatch();

  const { rols } = useSelector(state => state?.rols);

  useEffect(() => {
    dispatch(rolsLoading());
  }, [dispatch])

  console.log(rols);
  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div className="card">
            <div class="card-header">
              Gestion de Roles
            </div>
            <div class="card-body">
              <div className="text-end">
                <button type="button" class="btn btn-success">Agregar</button>
              </div>
              <div class="table-responsive">
                <table class="table table-striped table-hover">
                  <thead>
                    <th>Nombre</th>
                    <th>Decripcion</th>
                    <th>Estado</th>
                    <th>Accion</th>
                  </thead>
                  <tbody>
                    {
                      rols.length > 0 && rols.map(item => {
                        return <>
                          <tr class="table-active">
                            <td>
                              {item.nombre_rol}
                            </td>
                            <td>
                              {item.descripcion_rol}
                            </td>
                            <td>
                              {item.estado_rol}
                            </td>
                            <td className="text-end">
                              <button type="button" class="btn btn-danger">Modificar</button>
                            </td>
                          </tr>
                        </>
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
