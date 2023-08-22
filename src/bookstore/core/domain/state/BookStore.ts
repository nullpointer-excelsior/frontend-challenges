import { Book } from "../model/Book";

export interface BookStore {
    books: Book[]
    readingList: Book[]
}