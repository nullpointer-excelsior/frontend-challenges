import { BookStore } from "../domain/state/BookStore";
import { Book } from "../domain/model/Book";

export class StatePersistence {
    
    saveBookstore(store: BookStore) {
        localStorage.setItem("books", JSON.stringify(store.books))
        localStorage.setItem("readingList", JSON.stringify(store.readingList))
    }

    readBookStore() : BookStore {
        const books = JSON.parse(localStorage.getItem("books")) as Book[]
        const readingList = JSON.parse(localStorage.getItem("readingList")) as Book[]
        return {
            books,
            readingList
        }
    }

}