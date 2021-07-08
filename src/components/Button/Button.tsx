import { ReactNode } from 'react';

enum BUTTON_TYPE {
  primary = 'primary',
  link = 'link',
}

interface IProps {
  children: string | ReactNode;
  type?: keyof typeof BUTTON_TYPE;
  onClick: () => void;
}

const Button = ({ children, type = BUTTON_TYPE.link, onClick }: IProps) => {
  return (
    <button type='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
