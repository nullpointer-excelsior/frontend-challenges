import { Book } from "../core/domain/model/Book"
import { bookstoreState, syncState } from "../core/services"
import useObservable from "../hooks/useObservable"
import useObservableValue from "../hooks/useObservableValue"
import BookBudge from "./BookBudge"
import BookItem from "./BookItem"
import BookList from "./BookList"

export default function BookStore() {

    
  
    return (
      <div className=" mt-5 flex flex-col justify-center items-center text-neutral-300 gap-2 sm:flex-row sm:gap-3">
        {/* <div className="p-4 text-white"> */}
          {/* <div className='flex justify-center text-center'> */}
            <BookList />
          {/* </div> */}
        {/* </div> */}
      </div>
    )
  }