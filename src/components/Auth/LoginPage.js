import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';
// import { AuthContext } from "../../auth/authContext";
// import { types } from "../../types/types";
// import './Login.css';
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth';
import { useForm } from "../../hooks/useForm";
import '../css/auth.css';

export const LoginPage = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ]= useForm({
        Username: '',
        Password: ''
    });

    const {Username, Password} = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(Username, Password));
    }

    /*const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'useradmin'
            }
        }

        dispatch(action);

        const lastPath = '/adminHome';
        navigate(lastPath, {
            replace: true
        });
    }*/

    return (
        <>
            <div className="wrapper">
                <div className="auth-content">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                {/* <img className="brand" src="assets/img/bootstraper-logo.png" alt="bootstraper logo"/> */}
                            </div>
                            <h6 className="mb-4 text-muted">Ingrese a su cuenta</h6>
                            <form action="" method="" onSubmit={handleLogin}>
                                <div className="mb-3 text-start">
                                    <label for="email" className="form-label">Dirección de correo electrónico</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Dirección de correo electrónico" 
                                    name="Username"
                                    value={Username}
                                    onChange={handleLoginInputChange}
                                    required />
                                </div>
                                <div className="mb-3 text-start">
                                    <label for="password" className="form-label">Contraseña</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Contraseña"
                                    name="Password"
                                    value={Password}
                                    onChange={handleLoginInputChange}
                                   required />
                                </div>
                                <div className="mb-3 text-start">
                                    <div className="form-check">
                                        <input className="form-check-input" name="remember" type="checkbox" value="" id="check1" />
                                        <label className="form-check-label" for="check1">
                                            Recordarme en este dispositivo
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Ingresar</button>
                            </form>
                            <p className="mb-2 text-muted">¿Se te olvidó tu contraseña? <NavLink exact to="/forgot-password">Recordar</NavLink></p>
                            <p className="mb-0 text-muted">¿Aún no tienes cuenta? <NavLink exact to="/signup">Inscribirse</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div classNameName="container mt-5">
                <h1>Login</h1>
                <hr />

                <button
                    classNameName="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div> */}
        </>
    );
}