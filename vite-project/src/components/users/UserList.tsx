import { TEXT } from '../../data/text';
import { IPost } from '../../data/types';
import UserCard from './UserCard';

interface IProps {
  postList: IPost[];
}

const UserList = ({ postList }: IProps) => {
  const list = postList.length ? (
    <div className="card__list">
      {postList.map((el) => (
        <UserCard post={el} key={el.name} />
      ))}
    </div>
  ) : (
    <div>{TEXT.ERRORS.EMPTY}</div>
  );

  return list;
};

export default UserList;
