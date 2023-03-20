import classes from './MyLoader.module.css';

const MyLoader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
      <p className={classes.text}>Wait...</p>
    </div>
  );
};

export default MyLoader;
