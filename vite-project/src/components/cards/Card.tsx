import { IPhoto } from '../../data/types';
import { setModal, setVisible } from '../../store/cardSlice';
import { useAppDispatch } from '../../store/hook';
import MyButton from '../UI/button/MyButton';

interface IProps {
  photo: IPhoto;
}

const Card = ({ photo }: IProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setModal(photo));
    dispatch(setVisible(true));
  };

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

export default Card;
