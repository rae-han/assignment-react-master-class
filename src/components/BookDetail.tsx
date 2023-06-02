import React from 'react';
import {Link, Outlet, useOutletContext, useParams} from "react-router-dom";
import {Book} from "../typings/db.ts";

const BookDetail = () => {
  const { bookId } = useParams() as { bookId: string };
  const { books } = useOutletContext<{ books: Book[] }>();

  const book = books[parseInt(bookId, 10)];

  return (
    <div>
      <h2>{book.title}</h2>
      <ul>
        <li><Link to={'chapters'}>chapters</Link></li>
        <li><Link to={'characters'}>characters</Link></li>
      </ul>
      <Outlet context={{ book }} />
    </div>
  );
};

export default BookDetail;