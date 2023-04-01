import { IPhoto } from '../../data/types';
import { MyButton } from '../UI';

interface IProps {
  photo: IPhoto;
  setCard: (card: IPhoto) => void;
}

export const Card = ({ photo, setCard }: IProps) => {
  const handleClick = () => setCard(photo);
  return (
    <div className="card">
      <h3 className="card__name">{photo.user.name}</h3>
      <div className="card__img-box">
        <img src={photo.urls.small} alt="photo" height="60" />
      </div>
      <MyButton onClick={handleClick}>More info</MyButton>
    </div>
  );
};
