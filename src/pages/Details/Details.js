import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { useParams } from "react-router-dom";

function Details() {
  const { getPokemonDetails } = useAppContext();
  const params = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!params.pokemon) return;
    getPokemonDetails(params.pokemon).then((res) => setDetails(res.data));
  });

  console.log("details: ", details);
  return (
    <div className="grid place-items-center">
      <img src={details?.sprites.front_default} alt="" />
      <h1>{details?.name}</h1>

      <div>
        {details?.types.map(({ type }) => (
          <p>{type.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Details;
