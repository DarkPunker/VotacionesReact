import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { createRequirement, onModifyRequitement, requirementLoading } from '../../actions/positionAndRequirement';

export const RequirementPage = () => {

  const dispatch = useDispatch();

  const { requirements } = useSelector(state => state?.requirements);

  useEffect(() => {
    dispatch(requirementLoading());
  }, [dispatch])

  const addRequirement = () => {
    Swal.fire({
      title: 'Ingrese Nombre del Requisito',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        return dispatch(createRequirement(data))
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }

  const modifyRequirement = (requirement) =>{
    Swal.fire({
      title: 'Ingrese Nombre del Requisito',
      input: 'text',
      inputValue: requirement.nombre_requisito,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (nombre_requisito) => {
        return dispatch(onModifyRequitement(requirement.idrequisito ,nombre_requisito))
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
              Gestion de Requisitos
            </div>
            <div class="card-body">
              <div className="text-end">
                <button type="button"
                  class="btn btn-success"
                  onClick={addRequirement}
                >Agregar</button>
              </div>
              <table class="table table-striped table-hover">
                <thead>
                  <th>Nombre</th>
                  <th>Accion</th>
                </thead>
                <tbody>
                  {
                    requirements.length > 0 && requirements.map(item => {
                      return <tr class="table-active">
                        <td>
                          {item.nombre_requisito}
                        </td>
                        <td className="text-end">
                          <button type="button" class="btn btn-danger" onClick={() => modifyRequirement(item)}>Modificar</button>
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
