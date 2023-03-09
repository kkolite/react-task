import { Link, useMatch } from 'react-router-dom';

interface IProps {
  to: string,
  children: any
}

const MyLink = ({to, children}: IProps) => {
  const match = useMatch(to);
  return (
    <Link to={to} style={{color: match ? 'red' : 'blue'}}>
      {children}
    </Link>
  );
};

export default MyLink;