import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './search.css'
function Search(props){
    const [inputValue,setInputValue] = useState('');
    const[isId , isSetId ] = useState(0);
    const [isSearched , setIsSearched] = useState(false);
    const navigate = useNavigate();

    function call(){
        setIsSearched(true);
        console.log(inputValue);
        props.data.forEach((pokemon)=>{
            if(pokemon.name == inputValue){
                let id = pokemon.id;
                isSetId(id);
                navigate(`/pokemon/${id}`);
            }
        })
    }

    useEffect(()=>{
        if(isSearched){
            console.log(isId);
        }
    },[isId])
    return(
        <div className="search">
            <div className="label"><label>Search Your Fav Pokemon</label></div>
            <div>
                <input className="search-bar" type="text" placeholder="Eg..bulbasaur" value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}}></input>
                <button onClick={call} className="button">Search</button>

            </div>
        </div>
    )
}

export default Search;