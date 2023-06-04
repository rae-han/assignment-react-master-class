import {fetcher} from "../../utils/fetcher.ts";
import {useQuery} from "@tanstack/react-query";
import {Character} from "../../typings/db.ts";

export const fetchCharactersAPI = async () => {
  return await fetcher(`https://disney_api.nomadcoders.workers.dev/characters`).then(data => data.slice(0, 48));
}
export const useCharacters = () => {
  return useQuery<Character[]>(['characters'], fetchCharactersAPI, {
    staleTime: 1000 * 60 * 60
  })
}