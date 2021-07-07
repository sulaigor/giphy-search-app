import Button from 'components/Button';

const SearchInput = () => {
  const handleSearchInputChange = () => {};

  return (
    <div>
      <input type='text' onChange={handleSearchInputChange} />
      <div>
        <Button onClick={() => {}}>Search</Button>
      </div>
    </div>
  );
};

export default SearchInput;
