import { BehaviorSubject, map, switchMap, tap } from "rxjs";
import { bookstoreState } from "../services";

export class BookSearch {

    private filter$ = new BehaviorSubject<string>("Todos los libros")
    private booksAvailable$ = new BehaviorSubject(0)

    setFilterByGenre(genre: string) {
        this.filter$.next(genre)
    }

    getFilteredBooks() {
        return this.filter$.pipe(
            switchMap(genre => {
                if (genre === "Todos los libros") {
                    return bookstoreState.getBooks();
                } else {
                    return bookstoreState.getBooks().pipe(
                        map(books => books.filter(book => book.genre === genre))
                    );
                }
            }),
            tap(books => this.booksAvailable$.next(books.length))
        );
    }

    getAvailableFilteredBooks() {
        return this.booksAvailable$.asObservable()
    }

}