import { Component } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

interface IProps {
  currentPage: () => void;
}

class Form extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  createPost(str: string, date: string) {
    console.log(str, date);
    
  }

  render() {
    return (
      <div>
        <UserForm create={this.createPost.bind(this)}/>
        <UserList />
      </div>    
    );
  }
}

export default Form;