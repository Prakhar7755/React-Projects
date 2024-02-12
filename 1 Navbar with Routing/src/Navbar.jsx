import React, { Children } from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                {/* <li >
                    <a to="/pricing">Pricing</a>
                </li>
                <li>
                    <a to="/about">About</a>
                </li> */}
            </ul>
        </nav>
    );
};

function CustomLink({ to, children, ...props }) {
    // const path = window.location.pathname;

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default Navbar;

