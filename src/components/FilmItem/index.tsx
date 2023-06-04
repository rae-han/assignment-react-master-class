import React from 'react';
import {FilmItemContainer} from "./styles.tsx";

interface Props {
  item: string
}

const FilmItem = ({ item }: Props) => {
  return (
    <FilmItemContainer>
      <button>
        {item}
      </button>
    </FilmItemContainer>
  );
};

export default FilmItem;