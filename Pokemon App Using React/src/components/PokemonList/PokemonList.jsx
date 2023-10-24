// PokemonList.jsx
import React from "react";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";
import Search from "../Search/Search.jsx";
import axios from "axios";
import "./pokemonList.css";
function PokemonList() {
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  const [pokedexUrl, setPokedexUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function callback() {
    const response = await axios.get(pokedexUrl);
    // console.log(response);
    // console.log(response.data);
    setNext(response.data.next);
    setPrev(response.data.previous);

    const pokemonPromise = response.data.results.map((pokemonNameAndUrl) =>
      axios.get(pokemonNameAndUrl.url)
    );
    const pokemonData = await axios.all(pokemonPromise);
    // console.log(pokemonData);
    const finalData = pokemonData.map((pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        image: pokemon.data.sprites.other.dream_world.front_default,
        types: pokemon.data.types,
      };
    });
    // console.log(finalData);
    setData(finalData);
    // console.log(data);
  }
  useEffect(() => {
    callback();
    setLoading(false);
  }, [pokedexUrl]);

  return (
    <div>
      <Search data={data} />
      <div className="pokemon-wrapper">
        {loading
          ? "loading...."
          : data.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                key={pokemon.id}
                id={pokemon.id}
              />
            ))}
      </div>

      <div className="buttons">
        <button disabled={prev == null} onClick={() => setPokedexUrl(prev)}>
          Prev
        </button>
        <button disabled={next == null} onClick={() => setPokedexUrl(next)}>
          Next
        </button>
      </div>
    </div>
  );
}
export default PokemonList;