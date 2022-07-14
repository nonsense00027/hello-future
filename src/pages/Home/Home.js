import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { useAppContext } from "../../contexts/AppContext";

function Home() {
  const { pokemons } = useAppContext();

  return (
    <div className="w-full px-10 py-10">
      <div className="grid grid-cols-4 mx-auto justify-center gap-4">
        {pokemons.map(({ name, url }) => (
          <PokemonCard key={url} name={name} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
