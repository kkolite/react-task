import UserForm from '../components/form/UserForm';
import UserList from '../components/users/UserList';
import { IPost } from '../data/types';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { addCard } from '../store/userSlice';

const Form = () => {
  const list = useAppSelector((state) => state.users.cards);
  const dispatch = useAppDispatch();

  const setPost = (post: IPost) => {
    dispatch(addCard(post));
  };

  return (
    <div className="form__page">
      <UserForm setPost={setPost} />
      <UserList postList={list} />
    </div>
  );
};

export default Form;
