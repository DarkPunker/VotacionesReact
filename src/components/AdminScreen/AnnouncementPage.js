import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { requirementLoading, positionLoading } from '../../actions/positionAndRequirement';
import { electionLoading, onSaveAnnouncement } from '../../actions/electionAndAnnouncement';
import { useForm } from "../../hooks/useForm";
import Swal from 'sweetalert2';

export const AnnouncementPage = () => {

  const dispatch = useDispatch();

  const { requirements } = useSelector(state => state?.requirements);
  const { positions } = useSelector(state => state?.positions);
  const { elections } = useSelector(state => state?.elections);
  const [req, setReq] = useState([]);


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
    req,
    nombre_convocatoria: '',
    fecha_inicio: '',
    fecha_fin: '',
    cargo: '',
    eleccion: ''
  });

  const {
    nombre_convocatoria,
    fecha_inicio,
    fecha_fin,
    cargo,
    eleccion
  } = formRegisterValues;

  const saveAnnouncement = (e) => {
    e.preventDefault();
    console.log(formRegisterValues);
    dispatch(onSaveAnnouncement(nombre_convocatoria,fecha_inicio,fecha_fin,cargo,eleccion,req))
  }

  const onChageReq = (event) => {
    const { target } = event
    const index = req.findIndex(value => target.value === value)
    let reqAux = req
    //console.log(req, target.value, index)
    if (index < 0 && target.checked) {
      reqAux = [...req, target.value]
    } else {
      reqAux = reqAux.splice(index, 1)
    }
    setReq(reqAux)
    console.log("reqAux", reqAux)
    handleRegisterInputChange({ ...event, target: { name: target.name, value: reqAux } })
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
                  <input type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="nombre_convocatoria"
                    value={nombre_convocatoria}
                    onChange={handleRegisterInputChange}
                    required />
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Fecha de Inicio</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <input type="date"
                    className="form-control"
                    name="fecha_inicio"
                    value={fecha_inicio}
                    onChange={handleRegisterInputChange}
                    required />
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Fecha Fin</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <input type="date"
                    className="form-control"
                    name="fecha_fin"
                    value={fecha_fin}
                    onChange={handleRegisterInputChange}
                    required />
                </div>
                <div className="mb-3">
                  <div className="colum">
                    <label for="" className="form-label">Cargo</label>
                    <label for="" className="redcolor"> *</label>
                  </div>
                  <div class="input-group mb-3">
                    <select class="form-select form-select-lg"
                      id="inputGroupSelect01"
                      name='cargo'
                      value={cargo}
                      onChange={handleRegisterInputChange}>
                        <option
                            value=""
                          >Seleccionar Cargo</option>
                      {
                        positions.length > 0 && positions.map(item => {
                          return <option
                            value={item.idcargo}
                          >{item.nombre_cargo}</option>
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
                    <select class="form-select form-select-lg"
                      id="inputGroupSelect02"
                      name='eleccion'
                      value={eleccion}
                      onChange={handleRegisterInputChange}>
                        <option
                            value=""
                          >Seleccionar Eleccion</option>
                      {elections.length > 0 && elections.map(item => {
                        return <option
                          value={item.ideleccion}
                        >{item.nombre_eleccion}</option>
                      })}
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
                          <input
                            class="btn-check"
                            type="checkbox"
                            id={item.idrequisito}
                            name={"req"}
                            value={item.nombre_requisito}
                            onChange={onChageReq}
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
