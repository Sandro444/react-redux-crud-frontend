import React from "react"
import {Link, withRouter} from "react-router-dom"

export const Menu = () => {
    return(
        <div className="nav" style={navStyle}>
            <Link style={linkStyle} to="/subscriptions">subscriptions</Link>
            <Link style={linkStyle} to="/">home</Link>
        </div>
    )
}

const linkStyle = {
    padding: 25,
    color: "white",
    textDecoration: "none"
}

const navStyle = {
    backgroundColor: "black",
    display: "block",
    padding: 25
}