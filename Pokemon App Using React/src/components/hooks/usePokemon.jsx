// userPokemon.jsx
import axios from "axios";
import { useState, useEffect } from "react";
function usePokemon(url, type) {
  const [manu, setManu] = useState({
    prev: "",
    next: "",
    pokedexUrl: url,
    loading: true,
    data: [],
  });

  async function callback() {
    const response = await axios.get(manu.pokedexUrl);
    console.log("response is :",response.data.pokemon);
    setManu((state) => ({
      ...state,
      next: response.data.next,
      prev: response.data.previous,
    }));
    if (type) {
      setManu((state)=>({
        ...state,
        data:response.data.pokemon.slice(0,5)
      }))
    } else {
      const pokemonPromise = response.data.results.map((pokemonNameAndUrl) =>
        axios.get(pokemonNameAndUrl.url)
      );
      const pokemonData = await axios.all(pokemonPromise);
      const finalData = pokemonData.map((pokemon) => {
        return {
          id: pokemon.data.id,
          name: pokemon.data.name,
          image: pokemon.data.sprites.other.dream_world.front_default,
          types: pokemon.data.types,
        };
      });

      setManu((state) => ({ ...state, data: finalData, loading: false }));
    }
  }
  useEffect(() => {
    callback();
  }, [manu.pokedexUrl]);

  return { manu, setManu };
}

export default usePokemon;
