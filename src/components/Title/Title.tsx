import { ReactNode } from 'react';

interface IProps {
  children: string | ReactNode;
}

const Title = ({ children }: IProps) => {
  return <h2>{children}</h2>;
};

export default Title;
