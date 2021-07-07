import { ChangeEvent } from 'react';
import Button from 'components/Button';
import { useSearchContext } from 'contexts/SearchContext';

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleSearchInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => setSearchQuery(target.value);

  return (
    <div>
      <input type='text' value={searchQuery} onChange={handleSearchInputChange} />
      <div>
        <Button onClick={() => {}}>Search</Button>
      </div>
    </div>
  );
};

export default SearchInput;
