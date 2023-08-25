import { Book } from "../api/model/Book";

export interface BookStore {
    books: Book[]
    readingList: Book[]
}