import React from 'react';
import classes from './MyButton.module.scss';

interface IProps {
  children: string;
  [key: string]: unknown;
}

export const MyButton = ({ children, ...props }: IProps) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};
