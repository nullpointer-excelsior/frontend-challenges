import { Book } from "../domain/model/Book";
import getBooks from "../domain/api/getBooks";

export class StatePersistence {
    
    saveBooks(books: Book[]) {
        localStorage.setItem("books", JSON.stringify(books))
    }

    saveReadingList(books: Book[]) {
        localStorage.setItem("readingList", JSON.stringify(books))
    }

    readBooks(): Book[]  {
        const item = localStorage.getItem("books")
        if (item) {
            return JSON.parse(item)
        }
        return getBooks()
    }

    readreadingList(): Book[] {
        const item = localStorage.getItem("readingList")
        if(item) {
            return JSON.parse(item)
        }
        return []
    }

}