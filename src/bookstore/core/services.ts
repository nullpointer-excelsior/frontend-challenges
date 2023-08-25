import { StatePersistence } from "./application/StatePersistence";
import { BookSearch } from "./application/BookSearch";
import { SyncState } from "./application/SyncState";
import { BookStoreState } from "./application/BookStoreState";

export const statePersistence = new StatePersistence()

export const bookstoreState = new BookStoreState({
    books: statePersistence.readBooks(),
    readingList: statePersistence.readreadingList()
})

export const syncState = new SyncState(
    statePersistence,
    bookstoreState
)

export const bookSearch = new BookSearch(bookstoreState)

