import { TEXT } from '../../data/text';
import { IInput } from '../../data/types';

const Region = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      Choose your region
      <select
        className="form__control"
        {...register('region', {
          required: TEXT.ERRORS.DEFAULT,
        })}
      >
        <option value="by">BY</option>
        <option value="ru">RU</option>
        <option value="ua">UA</option>
      </select>
      <label className="error__label">{errors?.region?.message}</label>
    </label>
  );
};

export default Region;
