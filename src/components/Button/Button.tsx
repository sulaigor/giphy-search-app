import classNames from 'classnames';
import { IStringChildrenProps } from 'types/props';
import css from './button.module.scss';

enum BUTTON_TYPE {
  primary = 'primary',
  link = 'link',
}

interface IProps extends IStringChildrenProps {
  type?: keyof typeof BUTTON_TYPE;
  onClick: () => void;
}

const Button = ({ children, type = BUTTON_TYPE.primary, onClick }: IProps) => {
  return (
    <button type='button' className={classNames(css.btn, css[type])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
