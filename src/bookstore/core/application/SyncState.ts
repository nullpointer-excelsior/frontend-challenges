import { BookStore } from "../domain/state/BookStore";
import { BookStoreState } from "./BookStoreState";
import { StatePersistence } from "./StatePersistence";

export class SyncState {
    
    constructor(private persistence: StatePersistence) {}

    getBookStoreState() {
        const state: BookStore = {
            books: this.persistence.readBooks(),
            readingList: this.persistence.readreadingList()
        }
        return new BookStoreState(state)
    }

}