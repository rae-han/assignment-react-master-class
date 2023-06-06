import React from 'react';
import List from "../components/List";
import {Types} from "../typings/db.ts";

const types = [
  { type: Types.WANTED, title: '가고 싶은' },
  { type: Types.VISITED, title: '가본' },
  { type: Types.LIKE, title: '좋아하는' },
]

const Home = () => {
  return (
    <main>
      {types.map(type => <List key={type.type} {...type} />)}
    </main>
  );
};

export default Home;