import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./pokemonDetails.css";
import axios from "axios";
function PokemonDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  async function particularPokemonDetails() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );
    // console.log(response.data.sprites.other.dream_world.front_default);
    // console.log(response.data);
    let name = response.data.name;
    let baseExperience = response.data.base_experience;
    let order = response.data.order;
    let image = response.data.sprites.other.dream_world.front_default;
    let stats = response.data.stats[0].base_stat;
    let weight = response.data.weight;
    let types = response.data.types;

    let finalData = {
      name: name,
      base: baseExperience,
      order: order,
      image: image,
      stats: stats,
      weight: weight,
      types:types
      
    };

    setData(finalData);
    // console.log(finalData);
  }

  useEffect(() => {
    particularPokemonDetails();
  }, []);
  console.log(data);
  return (
    <div className="insidePokemon">
      <div>
        <span style={{ textDecoration: "underline" }}>Pokemon</span> : {data.order}
      </div>
      <div>
        <span style={{ textDecoration: "underline" }}>Name</span> : {data.name}
      </div>
      <div>
        <img src={data.image}></img>
      </div>
      <div>
        <span style={{ textDecoration: "underline" }}>Base</span> : {data.base}
      </div>
      <div>
        <span style={{ textDecoration: "underline" }}>Stats</span> : {data.stats}
      </div>
      <div>
        <span style={{ textDecoration: "underline" }}>Weight</span> : {data.weight}
      </div>
      <div>
      <span style={{ textDecoration: "underline" }}>Types</span> : {
        data.types && data.types.map((manu) => (<div key={manu.slot}> {manu.type.name}</div>))
      }</div>
      <button
        style={{
          "marginTop": "40px",
          "padding": "10px 40px",
          "border": "1px solid black",
          "borderRadius": "0.5rem",
          "fontSize": "15px",
          "fontWeight": "bold",
        }}
      >
        <Link to={"/"}>Back To Main</Link>
      </button>
    </div>
  );
}

export default PokemonDetails;