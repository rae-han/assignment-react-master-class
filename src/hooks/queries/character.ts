import {fetcher} from "../../utils/fetcher.ts";
import {QueryFunctionContext, useQuery} from "@tanstack/react-query";
import {Character, CharacterSummary} from "../../typings/db.ts";

export const fetchCharactersAPI = async () => {
  return await fetcher(`https://disney_api.nomadcoders.workers.dev/characters`).then(data => data.slice(0, 48));
}
export const useCharacters = () => {
  return useQuery<CharacterSummary[]>(['characters'], fetchCharactersAPI, {
    staleTime: 1000 * 60 * 60
  })
}

export const fetchCharacterAPI = ({queryKey}: QueryFunctionContext) => {
  const [_, characterId] = queryKey;
  return fetcher(`https://disney_api.nomadcoders.workers.dev/characters/${characterId}`)
}
export const useCharacter = (characterId: string) => {
  return useQuery<Character>(['character', characterId], fetchCharacterAPI)
}