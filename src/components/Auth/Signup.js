import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useForm } from "../../hooks/useForm";
import { register } from '../../actions/auth';
import Swal from 'sweetalert2';
import '../css/auth.css'

export const Signup = () => {

  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    IdentificationNumber: '',
    FirstName: '',
    SecondName: '',
    LastName: '',
    MLastName: '',
    Phone: '',
    Direction: '',
    Username: '',
    Password: '',
    CPassword: ''
  });

  const {
    IdentificationNumber,
    FirstName,
    SecondName,
    LastName,
    MLastName,
    Phone,
    Direction,
    Username,
    Password,
    CPassword
  } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (Password !== CPassword) {
      Swal.fire('Error', "La Contraseña debe Coincidir", 'error');
    } else {
      dispatch(register(
        IdentificationNumber,
        FirstName,
        SecondName,
        LastName,
        MLastName,
        Phone,
        Direction,
        Username,
        Password,
        CPassword
      ));
    }
  }


  return (<div className="wrapper">
    <div className="auth-content">
      <div className="card">
        <div className="card-body text-center">
          <div className="mb-4">
            {/* <img className="brand" src="assets/img/bootstraper-logo.png" alt="bootstraper logo"> */}
          </div>
          <h6 className="mb-4 text-muted">Crear una nueva cuenta</h6>
          <form action="" method="" onSubmit={handleRegister}>
            <div className="mb-3 text-start">
              <label for="name" className="form-label">Primer Nombre *</label>
              <input type="text"
                className="form-control"
                placeholder="Ingrese Primer Nombre"
                name="FirstName"
                value={FirstName}
                onChange={handleRegisterInputChange}
                required />
            </div>
            <div className="mb-3 text-start">
              <label for="name" className="form-label">Segundo Nombre</label>
              <input type="text"
                className="form-control"
                placeholder="Ingrese Segundo Nombre"
                name="SecondName"
                value={SecondName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="mb-3 text-start">
              <label for="name" className="form-label">Primer Apellido *</label>
              <input type="text"
                className="form-control"
                placeholder="Ingrese Primer Apellido"
                name="LastName"
                value={LastName}
                onChange={handleRegisterInputChange}

                required />
            </div>
            <div className="mb-3 text-start">
              <label for="name" className="form-label">Segundo Apellido</label>
              <input type="text"
                className="form-control"
                placeholder="Ingrese Segundo Apellido"
                name="MLastName"
                value={MLastName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="mb-3 text-start">
              <label for="name" className="form-label">Numero de Identificacion</label>
              <input type="number"
                className="form-control"
                placeholder="Ingrese Su Numero de Identificacion"
                name="IdentificationNumber"
                value={IdentificationNumber}
                onChange={handleRegisterInputChange}

              />
            </div>
            <div className="mb-3 text-start">
              <label for="name" className="form-label">Telefono</label>
              <input type="number"
                className="form-control"
                placeholder="Ingrese el Numero de Telefono"
                name="Phone"
                value={Phone}
                onChange={handleRegisterInputChange}

              />
            </div>
            <div className="mb-3 text-start">
              <label for="name" className="form-label">Direccion</label>
              <input type="text"
                className="form-control"
                placeholder="Ingrese Direccion de Residencia"
                name="Direction"
                value={Direction}
                onChange={handleRegisterInputChange}

              />
            </div>

            <div className="mb-3 text-start">
              <label for="name" className="form-label">Nombre de Usuario *</label>
              <input type="text"
                className="form-control"
                placeholder="Ingrese Nombre de Usuario"
                name="Username"
                value={Username}
                onChange={handleRegisterInputChange}

                required />
            </div>
            <div className="mb-3 text-start">
              <label for="password" className="form-label">Password</label>
              <input type="password"
                className="form-control"
                placeholder="Password"
                name="Password"
                value={Password}
                onChange={handleRegisterInputChange}
                required />
            </div>

            <div className="mb-3">
              <input type="password"
                className="form-control"
                placeholder="Confirm password"
                name="CPassword"
                value={CPassword}
                onChange={handleRegisterInputChange}
                required />
            </div>

            <div className="mb-3 text-start">
              <div className="form-check">
                <input className="form-check-input" name="confirm" type="checkbox" value="" id="check1" />
                <label className="form-check-label" for="check1">
                  Estoy de acuerdo con los <a href="#" tabindex="-1">términos y la política</a>.
                </label>
              </div>
            </div>
            <button className="btn btn-primary shadow-2 mb-4">Registrar</button>
          </form>
          <p className="mb-0 text-muted">Ya tienes una cuenta? <NavLink exact to="/login">Ingresar</NavLink></p>
        </div>
      </div>
    </div>
  </div>);
};
