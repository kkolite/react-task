import { TEXT } from '../../data/text';
import { IPost } from '../../data/types';

interface IProps {
  post: IPost;
}

const UserCard = ({ post }: IProps) => {
  return (
    <div className="card">
      <p>
        {TEXT.CARD.NAME} {post.name}
      </p>
      <p>
        {TEXT.CARD.DATE} {post.date}
      </p>
      <p>
        {TEXT.CARD.REGION} {post.region.toUpperCase()}
      </p>
      <p>
        {TEXT.CARD.RELOCATE} {post.radio}
      </p>
      <img src={post.file} alt="post img" className="user-post__img" />
    </div>
  );
};

export default UserCard;
