import { IStringChildrenProps as IProps } from 'types/props';

const Title = ({ children }: IProps) => {
  return <h2>{children}</h2>;
};

export default Title;
