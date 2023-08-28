import { bookSearch } from '../core/services';
import useObservableValue from '../hooks/useObservableValue';

export function BookFilter() {

  const [available] = useObservableValue(bookSearch.getAvailableFilteredBooks(), 0)
  const [options] = useObservableValue(bookSearch.getGenresOptions(), [])
  const [genre] = useObservableValue(bookSearch.getGenreSelected(), '')

  const handleSelectGenre = (genre: string) => () => bookSearch.setFilterByGenre(genre)

  return (
    <div className='flex gap-4 text-white w-auto text-left rounded-md p-4'>

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {
          options.map(op => {
            return (
              <button key={op.value} onClick={handleSelectGenre(op.value)} className={`text-white border border-gray-400 hover:border-white ${op.value === genre ? 'bg-amber-500' : 'bg-amber-700'} focus:outline-none rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3`}>
                {op.label} {op.value === genre ? `(${available})` : ''}
              </button>
            )
          })
        }
      </div>
    </div>
  );
};
