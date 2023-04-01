import { useAppSelector } from '../../store/hook';
import { NotFound } from '../UI/NotFound';
import classes from './ModalCard.module.scss';

export const ModalCard = () => {
  const card = useAppSelector((state) => state.cards.modal);
  const result = card ? (
    <div className={classes.container}>
      <img src={card.urls.regular} alt="image" className={classes.img} />
      <div>Author: {card.user.name}</div>
      <div>{card.description}</div>
      <div>{card.likes} Likes</div>
      <div>Tags: {card.tags.map((el) => el.title).join(', ')}</div>
    </div>
  ) : (
    <NotFound />
  );
  return result;
};
