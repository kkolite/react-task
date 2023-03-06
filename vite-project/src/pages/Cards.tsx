import MyInput from "../components/UI/input/MyInput";
import CardsList from "../components/CardsList";

const Cards = () => {
  return (
    <div>
      <MyInput />
      <CardsList list={[]}/>
    </div>
  );
};

export default Cards;