import { Component } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

interface IProps {
  currentPage: () => void;
}

class Form extends Component<IProps> {
  render() {
    return (
      <div>
        <UserForm />
        <UserList />
      </div>    
    );
  }
}

export default Form;