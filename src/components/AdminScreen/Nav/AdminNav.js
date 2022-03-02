import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authlogout } from '../../../actions/auth';
import '../../css/siderbar.css';


export const AdminNav = () => {

  const  name  = localStorage.getItem("name");
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

  return (
    <>
      <div>
        {/* <!-- Sidebar --> */}
        <nav id="sidebar" className="navbar-expand-lg navbar-dark bg-dark ">
          <div className="sidebar-header">
            <h3>Votaciones</h3>
          </div>

          <ul className="list-unstyled components">
            {/* <p>Dummy Heading</p> */}
            <li className="active">
              <button class="dropdown-btn" onClick={collapse}>Gestionar Usuarios
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
                <a>
                  <NavLink exact to="adminHome">Usuarios</NavLink>
                </a>
                <a>
                  <NavLink exact to="role">Roles</NavLink>
                </a>
                <a>
                  <NavLink exact to="adminHome">Permisos</NavLink>
                </a>
              </div>
              <button class="dropdown-btn" onClick={collapse}>Gestionar Eleccion
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
                <a>
                  <NavLink exact to="election">Crear Eleccion</NavLink>
                </a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <button class="dropdown-btn" onClick={collapse}>Gestionar Convocatoria
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
                <a>
                  <NavLink exact to="announcement">Crear Convocatoria</NavLink>
                </a>
                <a>
                  <NavLink exact to="position">Cargos</NavLink>
                </a>
                <a>
                  <NavLink exact to="requirement">Requisitos</NavLink>
                </a>
              </div>
              {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Home 1</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">Home 3</a>
                </li>
              </ul> */}
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
