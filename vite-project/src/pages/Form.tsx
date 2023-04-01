import { UserForm } from '../components/form/UserForm';
import { UserList } from '../components/users/UserList';

export const Form = () => {
  return (
    <div className="form__page">
      <UserForm />
      <UserList />
    </div>
  );
};
