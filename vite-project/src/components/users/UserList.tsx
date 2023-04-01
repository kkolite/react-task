import { TEXT } from '../../data/text';
import { useAppSelector } from '../../store/hook';
import { UserCard } from './UserCard';

export const UserList = () => {
  const list = useAppSelector((state) => state.users.cards);
  const result = list.length ? (
    <div className="card__list">
      {list.map((el) => (
        <UserCard post={el} key={el.name} />
      ))}
    </div>
  ) : (
    <div>{TEXT.ERRORS.EMPTY}</div>
  );

  return result;
};
