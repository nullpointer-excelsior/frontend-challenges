import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "../domain/model/Book";
import { BookStore } from "../domain/state/BookStore";

export class BookStoreState {

    private book$: BehaviorSubject<Book[]>
    private readingList$: BehaviorSubject<Book[]>
    private booksCount$ = new BehaviorSubject(0)
    private readingCountCount$ = new BehaviorSubject(0)

    constructor(props: BookStore) {
        
        this.book$ = new BehaviorSubject(props.books)
        this.readingList$ = new BehaviorSubject(props.readingList)

        this.book$.subscribe(books => this.booksCount$.next(books.length))
        this.readingList$.subscribe(readingList => this.readingCountCount$.next(readingList.length))

    }

    getBooks(): Observable<Book[]> {
        return this.book$.asObservable()
    }

    setBooks(books: Book[]): void {
        this.book$.next(books)
    }

    setReadingList(books: Book[]): void {
        this.readingList$.next(books)
    }

    addToReadingList(book: Book) {
        const readingList = this.readingList$.getValue()
        if (readingList.find(item => item.ISBN === book.ISBN) === undefined) {
            this.readingList$.next([
                ...readingList,
                book
            ])
            const bookUpdated = this.book$.getValue().filter(item => item.ISBN !== book.ISBN)
            this.book$.next([
                ...bookUpdated
            ])
        }
    }

    removeFromReadingList(book: Book) {
        const readingList = this.readingList$.getValue()
        const found = readingList.find(item => item.ISBN === book.ISBN)
        if (found !== undefined) {
            this.book$.next([
                ...this.book$.getValue(),
                found
            ])
            const readingListUpdated = this.readingList$.getValue().filter(item => item.ISBN !== book.ISBN)
            this.readingList$.next([
                ...readingListUpdated
            ])
        }
    }

    getReadingList() {
        return this.readingList$.asObservable()
    }

    getCountReadingList(){
        return this.readingCountCount$.asObservable()
    }

    getCountBooks() {
        return this.booksCount$.asObservable()
    }

}