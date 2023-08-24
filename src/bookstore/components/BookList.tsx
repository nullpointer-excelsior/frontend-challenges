import { Book } from '../core/domain/model/Book'
import BookItem from './BookItem'
import { bookSearch, bookstoreState } from '../core/services'
import SelectGenre from './SelectGenre'
import useObservableValue from '../hooks/useObservableValue'


export default function BookList() {
    
    const [filtered] = useObservableValue(bookSearch.getFilteredBooks(), [])

    const handleAddToReadingList = (book: Book) => bookstoreState.addToReadingList(book)
    const handleOnSelectGenre = (genre: string) => bookSearch.setFilterByGenre(genre)

    return (
        <div className='p-4 mt-5 text-neutral-300 flex flex-col items-center gap-4'>
            {/* <SelectGenre onSelectGenre={handleOnSelectGenre} /> */}
            <div className='grid grid-cols-3 grid-flow-row gap-4 overflow-y-scroll h-96'>
                {filtered.map(book => <BookItem key={book.ISBN} book={book} onClick={handleAddToReadingList} />)}
            </div>
        </div>
    )
}
