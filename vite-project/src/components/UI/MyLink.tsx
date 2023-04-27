import { NavLink } from 'react-router-dom';

interface IProps {
  to: string;
  children: string;
}

export const MyLink = ({ to, children }: IProps) => {
  return (
    <NavLink to={to} className="mylink">
      {children}
    </NavLink>
  );
};
