// Pokemon.jsx;
import React from 'react'
import { Link } from 'react-router-dom';
import './pokemon.css'
function Pokemon(props) {

  console.log(props);
  return (
    <Link to={`/pokemon/${props.id}`}>
    <div className="individualPokemons">
      <div>Name : {props.name}</div>
      <img src={ props.image} alt={props.name} />
      <b>Types of {props.name} are:</b>
      <div>
      {
        props.types.map((manu) => (<div key={manu.slot}> {manu.type.name}</div>))
      }</div>
    </div>
    </Link>
  );
}

export default Pokemon;