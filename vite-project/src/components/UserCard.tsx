import { IPost } from "../data/types";

interface IProps {
  post: IPost;
}

const UserCard = ({post} : IProps) => {
  return (
    <div className="card">
      <p>Name: {post.name}</p>
      <p>Date: {post.date}</p>
      <p>Region: {post.region.toUpperCase()}</p>
      <p>Pets: {post.checkbox === 'true' ? 'Yes' : 'No'}</p>
      <p>Relocate: {post.radio === 'true' ? 'Yes' : 'No'}</p>
      <img src={post.file} alt="post img" className="user-post__img"/>
    </div>
  );
};

export default UserCard;