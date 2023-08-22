import { Book } from "../domain/model/Book";
import getBooks from "../domain/api/getBooks";

export class StatePersistence {

    public static BOOK_KEY = "books"
    public static READING_LIST_KEY = "reading-list"
    
    saveBooks(books: Book[]) {
        localStorage.setItem(StatePersistence.BOOK_KEY, JSON.stringify(books))
    }

    saveReadingList(books: Book[]) {
        localStorage.setItem(StatePersistence.READING_LIST_KEY, JSON.stringify(books))
    }

    readBooks(): Book[]  {
        const item = localStorage.getItem(StatePersistence.BOOK_KEY)
        if (item) {
            return JSON.parse(item)
        }
        return getBooks()
    }

    readreadingList(): Book[] {
        const item = localStorage.getItem(StatePersistence.READING_LIST_KEY)
        if(item) {
            return JSON.parse(item)
        }
        return []
    }


}