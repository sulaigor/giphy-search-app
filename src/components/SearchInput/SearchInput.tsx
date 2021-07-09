import { ChangeEvent } from 'react';
import Button from 'components/Button';
import { useSearchContext } from 'contexts/SearchContext';
import css from './searchInput.module.scss';

const SearchInput = () => {
  const { searchQuery, setSearchQuery, clearSearchQuery } = useSearchContext();

  const handleSearchInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => setSearchQuery(target.value);

  return (
    <div className={css.wrapper}>
      <input type='text' className={css.searchInput} value={searchQuery} onChange={handleSearchInputChange} />
      <div className={css.actionsWrapper}>
        <Button onClick={clearSearchQuery}>Clear</Button>
      </div>
    </div>
  );
};

export default SearchInput;
