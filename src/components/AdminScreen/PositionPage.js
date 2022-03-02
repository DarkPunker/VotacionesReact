import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { createPosition, onModifyPositon, positionLoading } from '../../actions/positionAndRequirement';

export const PositionPage = () => {

  const dispatch = useDispatch();

  const { positions } = useSelector(state => state?.positions);

  useEffect(() => {
    dispatch(positionLoading());
  }, [dispatch])

  const addPosition = () => {
    Swal.fire({
      title: 'Ingrese Nombre del Cargo',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        return dispatch(createPosition(data))
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }

  const modifyPosition = (positions) =>{
    Swal.fire({
      title: 'Ingrese Nombre del Cargo',
      input: 'text',
      inputValue: positions.nombre_cargo,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (nombre_cargo) => {
        return dispatch(onModifyPositon(positions.idcargo ,nombre_cargo))
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
              Gestion de Cargos
            </div>
            <div class="card-body">
              <div className="text-end">
                <button type="button"
                  class="btn btn-success"
                  onClick={addPosition}
                >Agregar
                </button>
              </div>
              <table class="table table-striped table-hover">
                <thead>
                  <th>Nombre</th>
                  <th>Accion</th>
                </thead>
                <tbody>
                  {
                    positions.length > 0 && positions.map(item=>{
                      return <tr class="table-active">
                      <td>
                        {item.nombre_cargo}
                      </td>
                      <td className="text-end">
                        <button type="button" class="btn btn-danger" onClick={() => modifyPosition(item)}>Modificar</button>
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
