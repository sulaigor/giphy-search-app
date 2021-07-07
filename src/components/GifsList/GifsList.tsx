import { useSearchContext } from 'contexts/SearchContext';
import EmptyGifs from 'components/EmptyGifs';

const GifsList = () => {
  const { gifs } = useSearchContext();

  if (!gifs) {
    return <EmptyGifs />;
  }

  return null;
};

export default GifsList;
