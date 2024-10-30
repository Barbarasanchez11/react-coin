import React from "react"
import {Link} from "react-router-dom"

const Navbar = ({ linksName }) => {
    return (
        <nav>
            <ul>
            {linksName.map(link => {
                    const { id, name, path } = link;
                    return (
                        <li key={id}>
                            <Link to={path}>{name}</Link>
                        </li>
                    )           
                }
                )}
            </ul>
        </nav>
    )
}

export default Navbar