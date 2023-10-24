import { Routes, Route } from "react-router-dom";
import React from "react";
import PokemonList from '../components/PokemonList/PokemonList.jsx'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails.jsx'
function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" exact element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>
    )
}

export default CustomRoutes;