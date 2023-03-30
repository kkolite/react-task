import { useState } from 'react';
import UserForm from '../components/form/UserForm';
import UserList from '../components/users/UserList';
import { IPost } from '../data/types';

const Form = () => {
  const [postList, setPostsList] = useState<IPost[]>([]);

  const setPost = (post: IPost) => {
    setPostsList([...postList, post]);
  };

  return (
    <div className="form__page">
      <UserForm setPost={setPost} />
      <UserList postList={postList} />
    </div>
  );
};

export default Form;
