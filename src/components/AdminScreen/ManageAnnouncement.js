import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { announcementLoading, onSavePostulation } from '../../actions/electionAndAnnouncement';
import Swal from 'sweetalert2';

export const ManageAnnouncement = () => {

  const rol = localStorage.getItem("rol");

  const dispatch = useDispatch();

  const { announcements } = useSelector(state => state?.announcements);

  useEffect(() => {
    dispatch(announcementLoading());
  }, [dispatch])

  const postulation = (id) => {
    if (rol == "votante") {
      dispatch(onSavePostulation(id, localStorage.getItem("name"), new Date()))
    } else {
      Swal.fire('Error', "Solo quien tenga rol de votante se puede postular", 'error');
    }
  }

  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div className="card">
            <div class="card-header">
              Gestion de Convocatorias
            </div>
            <div class="card-body">
              <div className="text-end">
                <button type="button" class="btn btn-success">
                  <NavLink exact to="../announcement">Crear Convocatoria</NavLink>
                </button>
              </div>
              <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                  <thead >
                    <th >Nombre</th>
                    <th >Fecha de Inicio</th>
                    <th >Fecha fin</th>
                    <th >Cargo</th>
                    <th >Requisitos</th>
                    <th >Accion</th>
                  </thead>
                  <tbody>
                    {
                      announcements.length > 0 && announcements.map(item => {
                        return <tr class="table-active">
                          <td>{item.conv.nombre_convocatoria}</td>
                          <td>{item.conv.fecha_inicio_convocatoria}</td>
                          <td>{item.conv.fecha_fin_convocatoria}</td>
                          <td>{item.cargo.nombre_cargo}</td>
                          <td>{item.reqs.nombre_requisito}</td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-success"
                              onClick={() => postulation(item.conv.idconvocatoria)}
                            >
                              Postularse
                            </button>
                            <button
                              type="button"
                              class="btn btn-link"
                            >
                              <NavLink exact to={`../managepostulation/${item.conv.idconvocatoria}`}>
                                Ver Postulados
                              </NavLink>
                            </button>
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
  )
}
