import React from 'react';

interface Props {
  item: string
}

const FilmItem = ({ item }: Props) => {
  return (
    <li>
      {item}
    </li>
  );
};

export default FilmItem;