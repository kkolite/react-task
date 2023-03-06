import { IInputProps } from '../../../data/types';
import classes from './MyInput.module.css'

const MyInput = (props: IInputProps) => {
  return (
    <input className={classes.myInput} {...props}/>
  );
};

export default MyInput;