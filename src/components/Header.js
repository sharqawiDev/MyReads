import React from "react"
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className="list-books-title">
            <h1>{props.title}</h1>
        </div>
    )
}

Header.PropTypes = {
    title: PropTypes.string.isRequired
}

export default Header