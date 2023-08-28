import { bookstoreState } from '../core/services'
import useObservableValue from '../hooks/useObservableValue'
import { Book } from '../core/domain/api/model/Book'
import ReadingItem from './ReadingItem'
import ReadingListIcon from './ReadingListIcon'

export default function ReadingList() {

    const [readingList] = useObservableValue(bookstoreState.getReadingList(), [])
    const [countReadingList] = useObservableValue(bookstoreState.getCountReadingList(), 0)

    const handleRemoveFromReadingList = (book: Book) => bookstoreState.removeFromReadingList(book)

    return (
        <div className='flex flex-col items-center rounded-md my-10 cursor-pointer group/list'>
            {countReadingList > 0 ? <span className='inline group-hover/list:hidden'><ReadingListIcon favoritos={countReadingList} /></span> : null}
            <div className='py-4 hidden group-hover/list:visible group-hover/list:inline'>
                {readingList.map(book => <ReadingItem key={book.ISBN} book={book} onClick={handleRemoveFromReadingList} />)}
            </div>
        </div>
    )
}

