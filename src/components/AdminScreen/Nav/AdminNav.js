import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authlogout } from '../../../actions/auth';
import '../../css/siderbar.css';


export const AdminNav = () => {

  const name = localStorage.getItem("name");
  const rol = localStorage.getItem("rol");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {


    dispatch(authlogout());

    const lastPath = '/';
    navigate(lastPath, {
      replace: true
    });
  }

  const collapse = () => {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }

  }

  const esquema = (nombre, rutas) => {
    return <>
      <button class="dropdown-btn" onClick={collapse}>{nombre}
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-container">
        {
          rutas.map(item => {
            return <a>
              <NavLink exact to={item.nombreruta}>{item.letrero}</NavLink>
            </a>
          })
        }
      </div>
    </>
  }

  const menudinamico = () => {

    switch (rol) {
      case "invitado":
        return <>
          {esquema("Informacion",
            [{ nombreruta: 'elections', letrero: 'Elecciones' },
            ])}
          {esquema("Votaciones",
            [{ nombreruta: 'votes', letrero: 'Votaciones' },
            { nombreruta: 'maganeannouncement', letrero: 'Candidatos' }])}
        </>
      case "administrador":
        return <>
          {esquema("Gestionar Usuarios",
            [{ nombreruta: 'adminHome', letrero: 'Usuarios' },
            { nombreruta: 'role', letrero: 'Roles' }])}
          {esquema("Gestionar Eleccion",
            [{ nombreruta: 'elections', letrero: 'Elecciones' },
            { nombreruta: 'votes', letrero: 'Votaciones' }])}
          {esquema("Gestionar Convocatoria",
            [{ nombreruta: 'maganeannouncement', letrero: 'Convocatorias' },
            { nombreruta: 'position', letrero: 'Cargos' },
            { nombreruta: 'requirement', letrero: 'Requisitos' }])}
        </>
    }
  }

  return (
    <>
      <div>
        {/* <!-- Sidebar --> */}
        <nav id="sidebar" className="navbar-expand-lg navbar-dark bg-dark ">
          <div className="sidebar-header">
            <h3>Votaciones</h3>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              {menudinamico()}
            </li>
          </ul>
          <ul className="list-unstyled components">
            <li className="active">
              <button class="dropdown-btn" onClick={collapse}>{name}
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
                <button class="dropdown-btn" onClick={handleLogout}>salir
                  <i class="fa fa-caret-down"></i>
                </button>
              </div>
            </li>
          </ul>
        </nav>
        {/* <!-- Page Content --> */}

      </div>
    </>
  );
};
