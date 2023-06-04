import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useCharacter} from "../../hooks/queries/character.ts";
import CharacterDetail from "../../components/CharacterDetail";

interface Params {
  characterId: string
}

interface Location {
  state: {
    name: string
  }
}

const CharacterPage = () => {
  const { characterId } = useParams() as unknown as Params;
  const { state } = useLocation() as unknown as Location;

  const { data: character, isLoading, error } = useCharacter(characterId);

  if (error) {
    return null;
  }

  return (
    <>
      { isLoading || !character
        ? <div>loading...</div>
        : <CharacterDetail character={character} />
      }
    </>
  );
};

export default CharacterPage;