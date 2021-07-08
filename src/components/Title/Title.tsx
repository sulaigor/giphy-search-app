import { IStringChildrenProps as IProps } from 'types/props';
import css from './title.module.scss';

const Title = ({ children }: IProps) => {
  return <h2 className={css.title}>{children}</h2>;
};

export default Title;
