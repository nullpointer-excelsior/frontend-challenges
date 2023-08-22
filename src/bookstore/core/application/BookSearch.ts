import { Book } from "../domain/model/Book";

export class BookSearch {

    constructor(private books: Book[]) {}

    filterByGenre(genre: string) {
        if (genre === "Todos los libros") {
            return this.books
        }
        return this.books.filter(item => item.genre === genre)
    }

}