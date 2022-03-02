import React from 'react';


export const RolePage = () => {
    return (
    <>
        <div className="container-fluid col-md-8 .offset-md-3 pt-5 ">
            <div className="contenido">
                <div className="card">
                    <div class="card-header">
                        Gestion de Roles
                    </div>
                    <div class="card-body">
                        <div className="text-end">
                            <button type="button" class="btn btn-success">Agregar</button>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <th>Nombre</th>
                                <th>Decripcion</th>
                                <th>Estado</th>
                                <th>Accion</th>
                            </thead>
                            <tbody>
                                <tr class="table-active">
                                    <td>
                                        administrador
                                    </td>
                                    <td>
                                        el todo poderodo de esta page
                                    </td>
                                    <td>
                                        activo
                                    </td>
                                    <td className="text-end">
                                        <button type="button" class="btn btn-danger">Modificar</button>
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                       invitado
                                    </td>
                                    <td>
                                        solo puede ver
                                    </td>
                                    <td>
                                        activo
                                    </td>
                                    <td className="text-end">
                                        <button type="button" class="btn btn-danger">Modificar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
