import ClearSearch from '../../../assets/ClearSearch';
import { setVisible } from '../../../store/cardSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import classes from './MyModal.module.scss';

interface IProps {
  children: JSX.Element;
}

const MyModal = ({ children }: IProps) => {
  const isVisible = useAppSelector((state) => state.cards.isVisible);
  const dispatch = useAppDispatch();
  const cl = isVisible ? [classes.myModal, classes.active] : [classes.myModal];

  const handleClose = () => {
    dispatch(setVisible(false));
  };

  return (
    <div className={cl.join(' ')} onClick={handleClose}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <span className={classes.close} onClick={handleClose}>
          <ClearSearch />
        </span>
      </div>
    </div>
  );
};

export default MyModal;
