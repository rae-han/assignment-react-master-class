import React from 'react';
import {useCharacters} from "../../hooks/queries/character.ts";
import {HomeContainer} from "./styles.tsx";
import CharacterList from "../../components/CharacterList";

const Home = () => {
  const { data: characters, isLoading, error } = useCharacters();

  if (error) {
    return null;
  }

  return (
    <HomeContainer>
      { (isLoading || !characters)
        ? <div>loading</div>
        : (
          <>
            <h1 className="Title">Disney Characters</h1>
            <CharacterList characters={characters} />
          </>
        )
      }
    </HomeContainer>
  );
};

export default Home;