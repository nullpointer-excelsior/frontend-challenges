import { Book } from "../core/domain/model/Book";

const imageSize = 150

interface Props { 
    book: Book
    onClick: (book: Book) => void 
}

export default function BookItem({ book, onClick }: Props) {

    return (
        <div className="flex items-center justify-center flex-col rounded-border py-10" onClick={() => onClick(book)}>
            <p className="text-gray-400">{book.author.name}</p>
            <p className="text-xl text-cyan-400 my-2">{book.title}</p>
            <figure className="group h-auto max-w-lg cursor-pointer transition-all duration-300 blur-none">
                <img className="group-hover:blur-sm " width={imageSize} height={imageSize} src={book.cover} alt="image description" />
                <figcaption className=" absolute px-4 text-sm text-white bottom-6 blur-none invisible group-hover:visible">
                    <p>{book.synopsis}</p>
                </figcaption>
            </figure>
        </div>
    )

}