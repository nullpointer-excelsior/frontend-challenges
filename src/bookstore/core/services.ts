import { StatePersistence } from "./application/StatePersistence";
import { BookSearch } from "./application/BookSearch";
import { SyncState } from "./application/SyncState";

export const statePersistence = new StatePersistence()

export const syncState = new SyncState(statePersistence)

export const bookstoreState = syncState.getBookStoreState()

export const bookSearch = new BookSearch()

