import classes from './MyLoader.module.scss';

export const MyLoader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
      <p className={classes.text}>Wait...</p>
    </div>
  );
};
