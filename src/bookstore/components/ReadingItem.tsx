import { Book } from "../core/domain/api/model/Book";

const imageSize = 30

interface Props { 
    book: Book
    onClick: (book: Book) => void 
}

export default function ReadingItem({ book, onClick }: Props) {

    return (
        <div className="group absolut flex items-center justify-center flex-col py-1 cursor-pointer transform transition-transform hover:scale-110" onClick={() => onClick(book)}>
            {/* <p className="absolute invisible group-hover:relative group-hover:visible text-sm font-bold text-white my-1">QUITAR</p> */}
            <img className="rounded-full w-10 h-10 group-hover:h-20 group-hover:w-20 group-hover:mt-2" width={imageSize} height={imageSize} src={book.cover} alt="image description" />
            <p className="absolute invisible group-hover:relative group-hover:visible text-sm text-cyan-400 my-2">{book.title}</p>
        </div>
    )

}