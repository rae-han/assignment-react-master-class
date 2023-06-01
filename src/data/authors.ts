import {Author} from "../typings/db.ts";

export const characters = [
  { id: 0, name: 'character 가' },
  { id: 1, name: 'character 나' },
  { id: 2, name: 'character 다' },
]

export const chapters = [
  { id: 0, title: 'chapter 1' },
  { id: 1, title: 'chapter 2' },
  { id: 2, title: 'chapter 3' },
]

export const books = [
  { id: 0, title: 'Book aaa' },
  { id: 1, title: 'Book bbb' },
  { id: 2, title: 'Book ccc' },
].map(book => ({ ...book, chapters, characters }))

export const authors: Author[] = [
  { id: 0, name: 'author ABC' },
  { id: 1, name: 'author 123' },
  { id: 2, name: 'author 가나다' },
].map(author => ({ ...author, books }))