import { Component } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { IPost } from '../data/types';

interface IProps {
  currentPage: () => void;
}

class Form extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  setPost(post: IPost) {
    console.log(Object.entries(post));
  }

  render() {
    return (
      <div>
        <UserForm setPost={this.setPost.bind(this)} />
        <UserList />
      </div>
    );
  }
}

export default Form;
