import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home';
import Header from './paginas/Header';
import Coin from './paginas/Coin'
import Favorites from './paginas/Favorites';


function App() {

    return (
        <>   
        <Router>
        <Header />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/coin/:id' element={<Coin />} />
           <Route path='/favorites' element={<Favorites />} />
         </Routes>
        </ Router>  
        </>
    )
}

export default App;