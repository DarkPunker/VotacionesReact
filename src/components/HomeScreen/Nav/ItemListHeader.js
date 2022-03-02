import React from "react";
import PropTypes from 'prop-types';

export const ItemListHeader = ({ link, text }) => {

    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href={link}>{text}</a>
            </li>
        </>
    );
}

ItemListHeader.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

ItemListHeader.defaultProps = {
    link: "#",
    text: ""
}
