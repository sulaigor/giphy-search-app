import Button from 'components/Button';
import { useSearchContext } from 'contexts/SearchContext';
import { getPageNumber } from './utils';
import css from './pagination.module.scss';

const Pagination = () => {
  const { currentPage, maxPages, setCurrentPage } = useSearchContext();

  if (maxPages <= 1) {
    return null;
  }

  const handleLinkClick = (pageIndex: number) => setCurrentPage(getPageNumber(pageIndex));

  return (
    <div className={css.paginationWrapper}>
      <ul className={css.paginationList}>
        {new Array(maxPages).fill(null).map((_, index: number) => (
          <li key={`pagination-link-item-${index}`} className={css.paginationItem}>
            <Button
              type='link'
              disabled={currentPage === getPageNumber(index)}
              onClick={() => handleLinkClick(index)}
            >
              {getPageNumber(index)}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
