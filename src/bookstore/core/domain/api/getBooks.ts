import * as data from '../../../../assets/books.json';

export default function getBooks() {
    return data.library.map(item => item.book)
}
