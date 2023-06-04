import React from 'react';
import {Character} from "../../typings/db.ts";
import {FilmListContainer} from "./styles.tsx";
import FilmItem from "../FilmItem";

type FilmsType = Pick<Character, 'films'>

interface Props {
  films: FilmsType[keyof FilmsType]
}

const FilmList = ({ films }: Props) => {
  return (
    <FilmListContainer>
      {films.map(film => <FilmItem key={film} item={film} />)}
    </FilmListContainer>
  );
};

export default FilmList;