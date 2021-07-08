import Button from 'components/Button';
import { useSearchContext } from 'contexts/SearchContext';
import { getPageNumber } from './utils';

const Pagination = () => {
  const { maxPages } = useSearchContext();

  const pages = new Array(maxPages).fill(null);

  const handleLinkClick = (pageIndex: number) => {};

  return (
    <ul>
      {pages.map((_, index: number) => (
        <li key={`pagination-link-item-${index}`}>
          <Button type='link' onClick={() => handleLinkClick(index)}>
            {getPageNumber(index)}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
