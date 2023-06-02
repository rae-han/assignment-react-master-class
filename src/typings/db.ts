export interface Character {
  id: number,
  name: string,
}

export interface Chapter {
  id: number,
  title: string,
}

export interface Book {
  id: number,
  title: string,
  chapters: Chapter[],
  characters: Character[],
}

export interface Author {
  id: number,
  name: string,
  books: Book[]
}