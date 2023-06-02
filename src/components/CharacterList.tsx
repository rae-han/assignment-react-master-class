import React from 'react';
import {useOutletContext} from "react-router-dom";
import {Book} from "../typings/db.ts";

const ChapterList = () => {
  const { book } = useOutletContext<{ book: Book }>();

  return (
    <div>
      <ul>
        {book.characters.map(character => <li key={character.id}>{character.name}</li>)}
      </ul>
    </div>
  );
};

export default ChapterList;