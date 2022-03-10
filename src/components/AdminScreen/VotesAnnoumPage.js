import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { announcementLoading, electionLoading } from '../../actions/electionAndAnnouncement';
import Swal from 'sweetalert2';

export const VotesAnnoumPage = () => {

  let { id } = useParams();

  let navigate = useNavigate();

  const rol = localStorage.getItem("rol");

  const dispatch = useDispatch();

  const { announcements } = useSelector(state => state?.announcements);

  useEffect(() => {
    dispatch(announcementLoading());
  }, [dispatch])


  const ingresar = (ideleccion) => {
    if (rol === "administrador") {
      let ruta = "../votes/" + ideleccion;
      navigate(ruta);
    } else {
      Swal.fire('Error', "Solo quien tenga rol de votante puede ingresar a la votacion", 'error');
    }
  }

  console.log(announcements);
  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div>
          {
            announcements.length > 0 && announcements.map(item => {
              if (item.conv.ideleccion == id) {
                return <div class="card text-center">
                  <div class="card-header">
                    Convocatoria Disponible
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{item.conv.nombre_convocatoria}</h5>
                    <p class="card-text">Cargo: {item.cargo.nombre_cargo}</p>
                    <p class="card-text">Para ingresar a la convocatoria selecciona el siguiente boton</p>
                    <button class="btn btn-primary"
                      
                    >Ingresar</button>
                  </div>
                  <div class="card-footer text-muted">
                    {item.conv.fecha_inicio_convocatoria} - {item.conv.fecha_fin_convocatoria}
                  </div>
                </div>
              }
            })
          }
          </div>
        </div>
      </div>
    </>
  );
};
