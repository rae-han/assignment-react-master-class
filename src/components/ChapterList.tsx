import React from 'react';
import {useOutletContext} from "react-router-dom";
import {Book} from "../typings/db.ts";

const ChapterList = () => {
  const { book } = useOutletContext<{ book: Book }>();

  return (
    <div>
      <ul>
        {book.chapters.map(chapter => <li key={chapter.id}>{chapter.title}</li>)}
      </ul>
    </div>
  );
};

export default ChapterList;