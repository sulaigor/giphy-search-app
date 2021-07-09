import { useSearchContext } from 'contexts/SearchContext';
import EmptyGifs from 'components/EmptyGifs';
import GifImage from './GifImage';
import css from './gifsList.module.scss';

const GifsList = () => {
  const { gifs } = useSearchContext();

  if (!gifs) {
    return <EmptyGifs />;
  }

  return (
    <ul className={css.gifsList}>
      {gifs.map((gif) => (
        <li key={gif.id} className={css.gifItem}>
          <GifImage gif={gif} />
        </li>
      ))}
    </ul>
  );
};

export default GifsList;
