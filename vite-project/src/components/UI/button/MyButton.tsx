import React from 'react';
import classes from './MyButton.module.css';

interface IProps {
  children: string;
  disabled?: boolean;
  title?: string;
}

const MyButton = ({ children, ...props }: IProps) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
