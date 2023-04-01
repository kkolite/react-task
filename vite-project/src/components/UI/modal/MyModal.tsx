import ClearSearch from '../../../assets/ClearSearch';
import classes from './MyModal.module.scss';

interface IProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

export const MyModal = ({ children, visible, setVisible }: IProps) => {
  const cl = [classes.myModal];
  if (visible) {
    cl.push(classes.active);
  }

  return (
    <div className={cl.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <span className={classes.close} onClick={() => setVisible(false)}>
          <ClearSearch />
        </span>
      </div>
    </div>
  );
};
