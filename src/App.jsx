import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home';
import Header from './paginas/Header';


function App() {

    return (
        <>   
        <Router>
        <Header />
         <Routes>
           <Route path='/' element={<Home />} />
         </Routes>
        </ Router>  
        </>
    )
}

export default App;