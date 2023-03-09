import { useParams } from 'react-router-dom';

const CardPage = () => {
  const {id} = useParams();
  return (
    <div>
      {id}
    </div>
  );
};

export default CardPage;