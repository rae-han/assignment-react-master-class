import React from 'react';
import {Character} from "../../typings/db.ts";
import {CharacterDetailContainer} from "./styles.tsx";
import FilmList from "../FilmList";

interface Props {
  character: Character
}

const CharacterDetail = ({ character }: Props) => {
  console.log(character)

  return (
    <CharacterDetailContainer>
      <img src={character.imageUrl} alt={`image of ${character.name}`} className="Detail__image"/>
      <h1 className="Detail__title">
        <span>{character.name}</span>'s films
      </h1>
      <FilmList films={character.films} />
    </CharacterDetailContainer>
  );
};

export default CharacterDetail;