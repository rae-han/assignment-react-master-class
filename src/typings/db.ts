export interface Character {
  id:        number;
  films:     string[];
  name:      string;
  imageUrl:  string;
  sourceUrl: string;
}

export type CharacterSummary = Pick<Character, 'id' | 'name' | 'imageUrl'>
