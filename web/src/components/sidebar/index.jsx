import React, { useState, useEffect } from 'react';
import api from 'axios';

export function Sidebar() {
  const [pokemons, setPokemons] = useState(['']);

  useEffect(() => {
    async function personagens() {
      const response = await api.get('http://localhost:3333/listarpokemon');

      setPokemons(response.data);
    }
    personagens();
  }, []);

  return (
    <>
      <div className="pokemons-div">
        {pokemons.map((pokemon, id) => (
          <div key={id}>
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
