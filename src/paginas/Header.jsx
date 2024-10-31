import React from "react"
import Navbar from "../components/Navbar"


const Header = () => {
    const links = [
        
        {id: 2,name:'Favorites', path:'/favorites'}
    ]

    return (
       <header>
         <Navbar linksName={links} />
        </header> 
    )
}
 export default Header
