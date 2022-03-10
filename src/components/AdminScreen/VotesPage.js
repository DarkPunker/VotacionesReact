import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { electionLoading } from '../../actions/electionAndAnnouncement';
import Swal from 'sweetalert2';

export const VotesPage = () => {

  let navigate = useNavigate();

  const rol = localStorage.getItem("rol");

  const dispatch = useDispatch();

  const { elections } = useSelector(state => state?.elections);


  useEffect(() => {
    dispatch(electionLoading());
  }, [dispatch])


  const ingresar = (ideleccion) => {
    if (rol === "administrador") {
      let ruta = "../votesannou/" + ideleccion;
      navigate(ruta);
    } else {
      Swal.fire('Error', "Solo quien tenga rol de votante puede ingresar a la votacion", 'error');
    }
  }

  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          {
            elections.length > 0 && elections.map(item => {
              if (item.estado_eleccion === "activo") {
                return <div class="card text-center">
                  <div class="card-header">
                    Eleccion Disponible
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{item.nombre_eleccion}</h5>
                    <p class="card-text">Para ingresar a la votacion selecciona el siguiente boton</p>
                    <button class="btn btn-primary"
                      onClick={() => ingresar(item.ideleccion)}
                    >Ingresar</button>
                  </div>
                  <div class="card-footer text-muted">
                    {item.fecha_inicio} - {item.fecha_fin}
                  </div>
                </div>
              }
            })
          }
        </div>
      </div>
    </>
  );
};
