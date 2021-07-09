import { useState } from 'react';
import classNames from 'classnames';
import { IGif } from 'types/gifs';
import Paragraph from 'components/Paragraph';
import css from './gifImage.module.scss';

interface IProps {
  gif: IGif;
}

const GifImage = ({ gif }: IProps) => {
  const [loadingImage, setLoadingImage] = useState(true);

  const { title, images } = gif;
  const {
    downsized_medium: { url },
  } = images;

  return (
    <div className={classNames(css.wrapper, { [css.loading]: loadingImage })}>
      {title.trim() && (
        <div className={css.titleWrapper}>
          <Paragraph className={css.title}>{title}</Paragraph>
        </div>
      )}
      <img className={css.image} src={url} alt={title} onLoad={() => setLoadingImage(false)} />
    </div>
  );
};

export default GifImage;
