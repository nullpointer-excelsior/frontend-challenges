import BookBudge from './BookBudge'
import { Book } from '../core/domain/model/Book'
import BookItem from './BookItem'
import { bookSearch, bookstoreState } from '../core/services'
import SelectGenre from './SelectGenre'
import useObservableValue from '../hooks/useObservableValue'
import { BehaviorSubject } from 'rxjs'

export class BookSearch {

   
    setFilterByGenre(genre: string) {
        
    }

    getFilteredBooks() {
        
    }

    getAvailableFilteredBooks() {

    }

}


interface Props {
    books: Book[]
}

export default function BookListStateless({ books }: Props) {
    
    const [filtered] = useObservableValue(bookSearch.getFilteredBooks(), [])
    const [available] = useObservableValue(bookSearch.getAvailableFilteredBooks(), 0)

    const handleAddToReadingList = (book: Book) => bookstoreState.addToReadingList(book)
    const handleOnSelectGenre = (genre: string) => bookSearch.setFilterByGenre(genre)

    return (
        <div className='p-4'>
            
            <p className='text-lg'>Libros disponibles <BookBudge>{available}</BookBudge></p>
            <SelectGenre onSelectGenre={handleOnSelectGenre} />

            <div className='grid grid-cols-3 grid-flow-row gap-4'>
                {filtered.map(book => <BookItem key={book.ISBN} book={book} onClick={handleAddToReadingList} />)}
            </div>
        </div>
    )
}
