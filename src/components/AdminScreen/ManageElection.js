import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { electionLoading } from '../../actions/electionAndAnnouncement';

export const ManageElection = () => {

 const dispatch = useDispatch();

  const { elections } = useSelector(state => state?.elections);

  useEffect(() => {
    dispatch(electionLoading());
  }, [dispatch])

  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div className="card">
            <div class="card-header">
              Gestion de Elecciones
            </div>
            <div class="card-body">
              <div className="text-end">
                <button type="button" class="btn btn-success">
                  <NavLink exact to="../manageelection">Crear Eleccion</NavLink>
                </button>
              </div>
              <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                  <thead >
                    <th >Nombre</th>
                    <th >Fecha de Inicio</th>
                    <th >Fecha fin</th>
                    <th >N° Votos</th>
                    <th >Votos Blanco</th>
                    <th >Estado</th>
                    <th >Accion</th>
                  </thead>
                  <tbody>
                    {
                      elections.length > 0 && elections.map(item => {
                        return <tr class="table-active">
                          <td>{item.nombre_eleccion}</td>
                          <td>{item.fecha_inicio}</td>
                          <td>{item.fecha_fin}</td>
                          <td>{item.numero_votos}</td>
                          <td>{item.numero_votos_blanco}</td>
                          <td>{item.estado_eleccion}</td>
                          <td className="text-end">
                            <button
                              type="button"
                              class="btn btn-danger"
                            >
                              <NavLink exact to={`../manageelection/${item.ideleccion}`}>
                                Modificar
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
