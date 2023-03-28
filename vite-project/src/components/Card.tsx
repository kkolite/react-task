import { Link } from 'react-router-dom';
import { IAirline, IPhoto } from '../data/types';
import MyButton from './UI/button/MyButton';

interface IProps {
  photo: IPhoto;
}

const Card = ({ photo }: IProps) => {
  return (
    <div className="card">
      <h3 className="card__name">{photo.user.name}</h3>
      <div className="card__img-box">
        <img src={photo.urls.small} alt="photo" height="60"/>
      </div>
      <MyButton disabled={true} title="Link disabled :(">
        More info
      </MyButton>
    </div>
  );
};

export default Card;
