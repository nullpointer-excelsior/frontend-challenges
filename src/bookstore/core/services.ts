import { BookStoreState } from "./application/BookStoreState";
import getBooks from "./domain/api/getBooks";
import { StatePersistence } from "./application/StatePersistence";
import { BookSearch } from "./application/BookSearch";

export const statePersistence = new StatePersistence()

export const bookstoreState = new BookStoreState({
    books: getBooks(),
    readingList: []
})

export const bookSearch = new BookSearch()

