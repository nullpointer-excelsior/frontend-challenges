import useObservableValue from './bookstore/hooks/useObservableValue'
import { bookSearch, bookstoreState, statePersistence } from './bookstore/core/services'
import BookItem from './bookstore/components/BookItem'
import SelectGenre from './bookstore/components/SelectGenre'
import BookBudge from './bookstore/components/BookBudge'
import useObservable from './bookstore/hooks/useObservable'

const genresOptions = bookstoreState.getGenres()
  .map(item => ({
    label: item,
    value: item
  }))

function App() {

  const [books] = useObservableValue(bookstoreState.getBooks(), [])
  const [readingList] = useObservableValue(bookstoreState.getReadingList(), [])
  const [countReadingList] = useObservableValue(bookstoreState.getCountReadingList(), 0)
  const [countBooks] = useObservableValue(bookstoreState.getCountBooks(), 0)

  const handleOnSelectGenre = (genre: string) => {
    const filtered = bookSearch.filterByGenre(genre)
    bookstoreState.setBooks(filtered)
  }

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-semibold">bookstore</h1>
      </header>

      <nav className="bg-gray-200 p-2">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Inicio</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Acerca de</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Servicios</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Contacto</a></li>
        </ul>
      </nav>

      <section className="p-4">
        <div className='flex justify-center flex-col text-center my-4'>
          <h2 className="text-xl mb-2 font-medium">Libros disponibles</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis est a sapien faucibus, at interdum nulla pellentesque.</p>
          <SelectGenre options={genresOptions} onSelectGenre={handleOnSelectGenre} />
        </div>

        <div className='flex justify-center text-center'>
          <div className='rounded-md border p-4'>
            <p className='text-xl'>Lista de lectura <BookBudge>{countReadingList}</BookBudge></p>
            {readingList.map(book => <BookItem key={book.ISBN} book={book} onClick={(book) => bookstoreState.removeFromReadingList(book)} />)}
          </div>
          <div>
            <p className='text-lg'>Libros disponibles <BookBudge>{countBooks}</BookBudge></p>
            <div className='grid grid-cols-3 grid-flow-row gap-4'>
              {books.map(book => <BookItem key={book.ISBN} book={book} onClick={(book) => bookstoreState.addToReadingList(book)} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
