import { Component } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { IPost } from '../data/types';

interface IProps {
  currentPage: () => void;
}

class Form extends Component<IProps, { postList: IPost[] }> {
  state: { postList: IPost[] } = { postList: [] };
  constructor(props: IProps) {
    super(props);
  }

  setPost(post: IPost) {
    console.log(Object.entries(post));
    const { postList } = this.state;
    postList.push(post);
    this.setState({ postList });
  }

  render() {
    return (
      <div>
        <UserForm setPost={this.setPost.bind(this)} />
        <UserList postList={this.state.postList} />
      </div>
    );
  }
}

export default Form;
