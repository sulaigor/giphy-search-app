import { IStringChildrenProps as IProps } from 'types/props';

const Paragraph = ({ children }: IProps) => {
  return <p>{children}</p>;
};

export default Paragraph;
