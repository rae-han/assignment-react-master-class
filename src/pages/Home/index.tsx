import React from 'react';
import {useCharacters} from "../../hooks/queries/character.ts";
import {Link} from "react-router-dom";

const Home = () => {
  const { data: characters, isLoading } = useCharacters();

  console.log(characters);

  return (
    <ul>
      {characters?.map((character, index) => (
        <li key={character.id}>
          <Link to={`/character/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;