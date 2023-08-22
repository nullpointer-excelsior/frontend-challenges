import { Book } from "../core/domain/model/Book";

export default function BookItem(props: { book: Book, onClick: (book: Book) => void }) {
    const { book, onClick } = props

    return (
        <div className="flex items-center justify-center flex-col cursor-pointer " onClick={() => onClick(book)}>
            <p>{book.title}</p>
            <img className="m-2" src={book.cover} width={100} height={100}></img>
            <p>{book.author.name}</p>
        </div>
    )
}