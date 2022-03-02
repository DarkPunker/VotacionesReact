import React from "react";
// import PropTypes from 'prop-types';
import { TagsHeader } from "./TagsHeader";

export const MainNav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid m-3">
                <a className="navbar-brand" href="#">Votaciones</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-2">

                </div>
                <div className="collapse navbar-collapse text-uppercase" id="navbarNavAltMarkup">
                    <TagsHeader />
                </div>
            </div>
        </nav>

    );
}