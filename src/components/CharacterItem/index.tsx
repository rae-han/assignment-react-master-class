import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {CharacterSummary} from "../../typings/db.ts";
import {CharacterItemContainer} from "./styles.tsx";
import NotFoundImage from '../../assets/images/disney.svg'

interface Props {
  character: CharacterSummary
}

const CharacterItem = ({ character }: Props) => {
  const onError = () => {
    console.log('onError')
  }

  // const isExistsImg = (url: string) => {
  //   const http = new XMLHttpRequest();
  //   http.open('HEAD', url, false);
  //   http.send();
  //
  //   return http.status !== 404;
  // }

  return (
    <CharacterItemContainer key={character.id}>
      <Link to={`/character/${character.id}`}>
        <img className="Item__image" src={character.imageUrl} alt={`image of ${character.name}`} onError={onError} />
        {/*<img src={isExistsImg(character.imageUrl) ? character.imageUrl : NotFoundImage} alt={`image of ${character.name}`} onError={onError} />*/}
        <h2 className="Item__title">{character.name}</h2>
      </Link>
    </CharacterItemContainer>
  );
};

export default CharacterItem;