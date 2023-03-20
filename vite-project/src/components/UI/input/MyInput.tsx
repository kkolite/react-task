import classes from './MyInput.module.css';

interface IProps {
  setSearch: (str: string) => void;
  value?: string;
}

const MyInput = ({ setSearch, value }: IProps) => {
  return (
    <input
      className={classes.myInput}
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
      defaultValue={value}
    />
  );
};

export default MyInput;
