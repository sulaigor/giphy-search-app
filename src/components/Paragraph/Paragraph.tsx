import classNames from 'classnames';
import { IStringChildrenProps } from 'types/props';
import css from './paragraph.module.scss';

interface IProps extends IStringChildrenProps {
  className?: string;
}

const Paragraph = ({ children, className }: IProps) => {
  return <p className={classNames(css.paragraph, className)}>{children}</p>;
};

export default Paragraph;
