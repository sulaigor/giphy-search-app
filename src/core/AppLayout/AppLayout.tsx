import GifsList from 'components/GifsList';
import Pagination from 'components/Pagination';
import SearchInput from 'components/SearchInput';

const AppLayout = () => {
  return (
    <>
      <SearchInput />
      <GifsList />
      <Pagination />
    </>
  );
};

export default AppLayout;
