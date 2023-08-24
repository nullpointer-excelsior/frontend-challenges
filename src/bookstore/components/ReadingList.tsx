import { bookstoreState } from '../core/services'
import useObservableValue from '../hooks/useObservableValue'
import { Book } from '../core/domain/model/Book'
import ReadingItem from './ReadingItem'
import ReadingListIcon from './ReadingListIcon'

export default function ReadingList() {

    const [readingList] = useObservableValue(bookstoreState.getReadingList(), [])
    const [countReadingList] = useObservableValue(bookstoreState.getCountReadingList(), 0)

    const handleRemoveFromReadingList = (book: Book) => bookstoreState.removeFromReadingList(book)

    return (
        <div className='flex flex-col items-center rounded-md my-10'>
            {countReadingList > 0 ? <ReadingListIcon /> : null}
            <div className='py-4'>
                {readingList.map(book => <ReadingItem key={book.ISBN} book={book} onClick={handleRemoveFromReadingList} />)}
            </div>
            {countReadingList > 0 ? <p className='text-6xl text-white'>{countReadingList}</p> : null}
        </div>
    )
}

