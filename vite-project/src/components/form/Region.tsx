import { IInput } from '../../data/types';

const Region = ({ register }: IInput) => {
  return (
    <label className="form__label">
      Choose your region
      <select className="form__control" {...register('region')}>
        <option value="by">BY</option>
        <option value="ru">RU</option>
        <option value="ua">UA</option>
      </select>
    </label>
  );
};

export default Region;
