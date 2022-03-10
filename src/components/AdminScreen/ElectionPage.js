import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { createElection, electionLoadingbyid, onChangeElection } from '../../actions/electionAndAnnouncement';
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import '.././css/colortext.css';

export const ElectionPage = () => {

    let { id } = useParams();

    const dispatch = useDispatch();

    const { elections } = useSelector(state => state?.elections);

    const electionselection = () =>{
        for (let index = 0; index < elections.length; index++) {
            if(elections[index].ideleccion == id){
                return elections[index];
            }
        }
    }

    const [formElectionValues, handleElectionInputChange] = useForm({
        Electionname: electionselection()?.nombre_eleccion,
        DateInit: electionselection()?.fecha_inicio,
        DateEnd: electionselection()?.fecha_fin
    });

    const {
        Electionname,
        DateInit,
        DateEnd
    } = formElectionValues;

    const handleElection = (e) => {
        e.preventDefault();
        if (DateEnd < DateInit) {
            Swal.fire('Error', "La Fecha Fin debe ser mayor a la Fecha De Inicio", 'error');
        } else if(id != undefined){
            dispatch(onChangeElection(
                id,
                Electionname,
                DateInit,
                DateEnd
            ));
        }else{
            dispatch(createElection(
                Electionname,
                DateInit,
                DateEnd));
        }
    }

    return (
        <>
            <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
                <div className="contenido">
                    <div className="card">
                        <div class="card-header">
                            Gestionar Eleccion
                        </div>
                        <div class="card-body">
                            <form action="" method="" onSubmit={handleElection}>
                                <div className="mb-3">
                                    <div className="colum">
                                        <label for="" className="form-label">Nombre de la Eleccion</label>
                                        <label for="" className="redcolor"> *</label>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        name="Electionname"
                                        value={Electionname}
                                        onChange={handleElectionInputChange}
                                        required />
                                </div>
                                <div className="mb-3">
                                    <div className="colum">
                                        <label for="" className="form-label">Fecha de Inicio</label>
                                        <label for="" className="redcolor"> *</label>
                                    </div>
                                    <input type="date"
                                        className="form-control"
                                        name="DateInit"
                                        value={DateInit}
                                        onChange={handleElectionInputChange}
                                        required />
                                </div>
                                <div className="mb-3">
                                    <div className="colum">
                                        <label for="" className="form-label">Fecha Fin</label>
                                        <label for="" className="redcolor"> *</label>
                                    </div>
                                    <input type="date"
                                        className="form-control"
                                        name="DateEnd"
                                        value={DateEnd}
                                        onChange={handleElectionInputChange}
                                        required />
                                </div>
                                <button type="submit" className="btn btn-success">Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
