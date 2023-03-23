import { Component } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { INullProps, IPost } from '../data/types';

class Form extends Component<INullProps, { postList: IPost[] }> {
  state: { postList: IPost[] } = { postList: [] };

  setPost(post: IPost) {
    console.log(Object.entries(post));
    const { postList } = this.state;
    postList.push(post);
    this.setState({ postList });
  }

  render() {
    return (
      <div className="form__page">
        <UserForm setPost={this.setPost.bind(this)} />
        <UserList postList={this.state.postList} />
      </div>
    );
  }
}

export default Form;
