import { IPost } from "../data/types";
import UserCard from "./UserCard";

interface IProps {
  postList: IPost[];
}

const UserList = ({postList} : IProps) => {
  const list = postList.length ? 
  <div>
    {postList.map((el) => (
      <UserCard post={el} key={el.name} />
    ))}
  </div> :
  <div>Empty list</div>

  return list;
};

export default UserList;
