import React from 'react';
import CharacterItem from "../CharacterItem";
import {CharacterSummary} from "../../typings/db.ts";
import {CharacterListContainer} from "./styels.tsx";

interface Props {
  characters: CharacterSummary[]
}

const CharacterList = ({ characters }: Props) => {
  return (
    <CharacterListContainer className="CharacterList">
      {characters?.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </CharacterListContainer>
  );
};

export default CharacterList;