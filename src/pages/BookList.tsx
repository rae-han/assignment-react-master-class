import React from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {authors} from "../data/authors.ts";

const BookList = () => {
  const { authorId } = useParams() as { authorId: string };
  const books = authors[parseInt(authorId, 10)].books;

  return (
    <div>
      <h1>{authors[parseInt(authorId, 10)].name}</h1>
      <ul>
        {books.map(book => <li key={book.id}><Link to={book.id.toString()}>{book.title}</Link></li>)}
      </ul>
      <Outlet context={{ books }} />
    </div>
  );
};

export default BookList;