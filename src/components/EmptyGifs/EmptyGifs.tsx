import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import SadEmoticon from './SadEmoticon';
import css from './emptyGifs.module.scss';

const EmptyGifs = () => {
  return (
    <div className={css.wrapper}>
      <Title>No Gifs...</Title>
      <Paragraph>Try to find some!</Paragraph>
      <SadEmoticon />
    </div>
  );
};

export default EmptyGifs;
