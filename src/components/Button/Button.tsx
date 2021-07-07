import { ReactNode } from 'react';

interface IProps {
  children: string | ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: IProps) => {
  return (
    <button type='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
