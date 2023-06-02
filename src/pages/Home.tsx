import React from 'react';

import { authors } from "../data/authors.ts";
import {Link} from "react-router-dom";

const Home = () => {
  console.log(authors)

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map(author => <li key={author.id}><Link to={`/author/${author.id.toString()}`}>{author.name}</Link></li>)}

      </ul>
    </div>
  );
};

export default Home;