import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { onChangeStatusCand, postulationLoading } from '../../actions/electionAndAnnouncement';
import Swal from 'sweetalert2';

export const ManagePostulation = () => {

  let { id } = useParams();

  const dispatch = useDispatch();

  const { postulations } = useSelector(state => state?.postulations);
  
  useEffect(() => {
    dispatch(postulationLoading(id));
  }, [dispatch])

  const bottonAction = (cand) => {
    switch (cand.estado_participante) {
      case "activo":
        return <button type="button" class="btn btn-primary" onClick={() => changeStatus(cand)}>desactivar</button>
      case "inactivo":
        return <button type="button" class="btn btn-primary" onClick={() => changeStatus(cand)}>activar</button>
    }
  }

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const changeStatus = (cand) => {
    swalWithBootstrapButtons.fire({
      title: 'Estas segur@?',
      text: "¡El cambio de estado sera reflejado proximamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, Modificarlo!',
      cancelButtonText: '¡No, cancela!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        return dispatch(onChangeStatusCand(cand.idcandidato));
      }
    })
  }

  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div className="card">
            <div class="card-header">
              Gestion de Postulados
            </div>
            <div class="table-responsive">
              <div class="card-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <th>Nombre</th>
                    <th>Numero</th>
                    <th>Estado</th>
                    <th>Convocatoria</th>
                    <th>Eleccion</th>
                    <th>Accion</th>
                  </thead>
                  <tbody>
                    {
                      postulations.length > 0 && postulations.map(item => {
                        return <tr class="table-active">
                          <td>
                            {item.pers.primer_nombre+
                            " "+item.pers.segundo_nombre+
                            " "+item.pers.primer_apellido+
                            " "+item.pers.segundo_apellido}
                          </td>
                          <td>
                            {item.cand.numero_participante}
                          </td>
                          <td>
                            {item.cand.estado_participante}
                          </td>
                          <td>
                            {item.conv.nombre_convocatoria}
                          </td>
                          <td>
                            {item.elecc.nombre_eleccion}
                          </td>
                          <td>
                          {bottonAction(item.cand)}
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
