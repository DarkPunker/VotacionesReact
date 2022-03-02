import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/auth.css'

export const ForgotPassword = () => {
    return (
        <div class="wrapper">
            <div class="auth-content">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="mb-4">
                            {/* <img class="brand" src="assets/img/bootstraper-logo.png" alt="bootstraper logo"> */}
                        </div>
                        <h6 class="mb-4 text-muted">Restablecer la contraseña</h6>
                        <p class="text-muted text-start">Ingrese su nombre de usuario y su contraseña, sera notificado a su numero de telefono</p>
                        <form action="" method="">
                            <div class="mb-3 text-start">
                                <label for="email" class="form-label">Nombre de Usuario</label>
                                <input type="email" class="form-control" placeholder="Ingrese Nombre de Usuario" required/>
                            </div>
                            <button class="btn btn-primary shadow-2 mb-4">Enviarme nueva contraseña</button>
                        </form>
                        <p class="mb-0 text-muted">No tienes una cuenta? <NavLink exact to="/signup">Registrarse</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
