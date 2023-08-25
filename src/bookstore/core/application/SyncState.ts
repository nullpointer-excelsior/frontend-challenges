import { filter, map, tap, fromEvent } from "rxjs";
import { BookStoreState } from "./BookStoreState";
import { StatePersistence } from "./StatePersistence";
import { Book } from "../domain/api/model/Book";


export const onStorage$ = fromEvent<StorageEvent>(window, 'storage')

export class SyncState {
    
    constructor(
        private persistence: StatePersistence,
        private state: BookStoreState
    ) {}

    saveBooks() {
        return this.state.getBooks().pipe(
            tap(books => this.persistence.saveBooks(books)),
            map(books => `${books.length} books saved`)
        )
    }

    saveReadingList() {
        return this.state.getReadingList().pipe(
            tap(books => this.persistence.saveReadingList(books)),
            map(books => `${books.length} reading-list saved`)
        )
    }

    syncBooks() {
        return onStorage$.pipe(
            filter(event => event.key === StatePersistence.BOOK_KEY),
            map(event => JSON.parse(event.newValue) as Book[]),
            tap(books => this.state.setBooks(books)),
            map(books => `${books.length} books synchronized`)
        )
    }

    syncReadingList() {
        return onStorage$.pipe(
            filter(event => event.key === StatePersistence.READING_LIST_KEY),
            map(event => JSON.parse(event.newValue) as Book[]),
            tap(books => this.state.setReadingList(books)),
            map(books => `${books.length} reading-list synchronized`)
        )
    }

}
