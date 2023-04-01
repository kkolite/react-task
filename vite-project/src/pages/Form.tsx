import { useState } from 'react';
import { UserForm } from '../components/form';
import { UserList } from '../components/users';
import { IPost } from '../data/types';

export const Form = () => {
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
