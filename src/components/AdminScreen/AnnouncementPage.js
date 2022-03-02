import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { requirementLoading, positionLoading, onSaveAnnouncement } from '../../actions/positionAndRequirement';
import { electionLoading } from '../../actions/electionAndAnnouncement';
import { useForm } from "../../hooks/useForm";

export const AnnouncementPage = () => {

  const dispatch = useDispatch();

  const { requirements } = useSelector(state => state?.requirements);
  const { positions } = useSelector(state => state?.positions);
  const { elections } = useSelector(state => state?.elections);

  useEffect(() => {
    dispatch(requirementLoading());
    dispatch(positionLoading());
    dispatch(electionLoading());
  }, [dispatch])

  const checks = () => {
    const aux = {}
    for (let index = 0; index < requirements.length; index++) {
      aux["req" + requirements[index].idrequisito] = ''

    }
    return aux
  }

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    ...checks(),

  });

  const {

  } = formRegisterValues;

  const saveAnnouncement = (e) => {
    e.preventDefault();
    console.log(formRegisterValues);
    //dispatch(onSaveAnnouncement(formRegisterValues))
  }

  return (
    <>
      <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
        <div className="contenido">
          <div className="card">
            <div class="card-header">
              Creacion de Convocatoria
            </div>
            <div class="card-body">
              <form onSubmit={saveAnnouncement}>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Nombre de la Convocatoria</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <input type="text" className="form-control" id="nombreEleccion" placeholder="Nombre" required />
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Fecha de Inicio</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <input type="date" className="form-control" id="fechaInicio" required />
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Fecha Fin</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <input type="date" className="form-control" id="fechaFin" required />
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Cargo</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <div class="input-group mb-3">
                    <select class="container-lg custom-select" id="inputGroupSelect01">
                      {
                        positions.length > 0 && positions.map(item => {
                          return <option value={item.idcargo}>{item.nombre_cargo}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Eleccion</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <div class="input-group mb-3">
                    <select class="container-lg custom-select" id="inputGroupSelect01">
                      {
                        elections.length > 0 && elections.map(item =>{
                          return <option value={item.ideleccion}>{item.nombre_eleccion}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Requisitos</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <div class="btn-group d-flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {
                      requirements.length > 0 && requirements.map(item => {
                        return <>
                          <input type="checkbox"
                            class="btn-check"
                            name={"req" + item.idrequisito}
                            id={item.idrequisito}
                            value={item.nombre_requisito}
                            onChange={handleRegisterInputChange}
                            autocomplete="off" />
                          <label class="btn btn-outline-primary" for={item.idrequisito}>{item.nombre_requisito}</label>
                        </>
                      })
                    }
                  </div>
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>);
};
