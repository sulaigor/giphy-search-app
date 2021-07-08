import { IStringChildrenProps as IProps } from 'types/props';
import css from './paragraph.module.scss';

const Paragraph = ({ children }: IProps) => {
  return <p className={css.paragraph}>{children}</p>;
};

export default Paragraph;
