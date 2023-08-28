import BookList from './bookstore/components/BookList'
import BookStoreDescription from './bookstore/components/BookStoreDescription'
import Footer from './bookstore/components/Footer'
import Header from './bookstore/components/Header'
import ReadingList from './bookstore/components/ReadingList'
import { syncState } from './bookstore/core/services'
import useObservable from './bookstore/hooks/useObservable'



function App() {

  useObservable(syncState.saveBooks())
  useObservable(syncState.saveReadingList())
  useObservable(syncState.syncBooks())
  useObservable(syncState.syncReadingList())

  return (

    <div className="max-w-[90rem] flex flex-col mx-auto w-full h-full">

      <Header />
      
      <main id="content" role="main">
        <div className="flex flex-rows items-center justify-center text-center py-10 px-4 sm:px-6 lg:px-8">

          <div className='basis-1/12'>
            <ReadingList />
          </div>

          <div className="basis-5/12">
            <BookStoreDescription />
          </div>

          <div className="basis-6/12">
            <BookList />
          </div>

        </div>
      </main>

      <Footer />
      
    </div>

  )
}

export default App
