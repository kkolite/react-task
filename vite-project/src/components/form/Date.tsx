import { IInput } from '../../data/types';

const Date = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      Date
      <input
        type="date"
        className="form__control"
        {...register('date', {
          required: 'Error!',
          pattern: {
            value: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
            message: 'Error!',
          },
        })}
      />
      <label className="error__label">{errors?.date && errors?.date?.message}</label>
    </label>
  );
};

export default Date;
