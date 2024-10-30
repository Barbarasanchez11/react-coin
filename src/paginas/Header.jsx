import React from "react"
import Navbar from "../components/Navbar"


const Header = () => {
    const links = [
        {id:1, name:'Coins', path: '/Coin'},
        {id: 2,name:'Favourites', path:'/Favourites'}
    ]

    return (
       <header>
         <Navbar linksName={links} />
        </header> 
    )
}
 export default Header
