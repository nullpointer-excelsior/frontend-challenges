import { BehaviorSubject, Observable, map, switchMap, tap } from "rxjs";
import { bookstoreState } from "../services";
import { BookStoreState } from "./BookStoreState";

const ALL_BOOKS_GENRE = "Todos los libros" 

type GenreOptions = { 
    label: string; 
    value: string; 
}

export class BookSearch {

    private filter$ = new BehaviorSubject<string>(ALL_BOOKS_GENRE)
    private booksAvailable$ = new BehaviorSubject(0)

    constructor(private state$: BookStoreState) { }

    setFilterByGenre(genre: string) {
        this.filter$.next(genre)
    }

    getFilteredBooks() {
        return this.filter$.pipe(
            switchMap(genre => {
                if (genre === ALL_BOOKS_GENRE) {
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

    getGenreSelected() {
        return this.filter$.asObservable()
    }

    getGenresOptions(): Observable<GenreOptions[]> {
        return this.state$.getBooks().pipe(
            map(book => book.map(item => item.genre)),
            map(genres => [...new Set(genres)]),
            map(genres => genres.map(genre => ({
                label: genre,
                value: genre
            }))),
            map(genres => [
                { label: ALL_BOOKS_GENRE, value: ALL_BOOKS_GENRE },
                ...genres
            ])
        )
    }

}