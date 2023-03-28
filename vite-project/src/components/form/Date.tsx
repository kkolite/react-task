import { TEXT } from '../../data/text';
import { IInput } from '../../data/types';

const Date = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      {TEXT.FORM.DATE}
      <input
        type="date"
        className="form__control"
        {...register('date', {
          required: TEXT.ERRORS.DEFAULT,
          pattern: {
            value: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
            message: TEXT.ERRORS.DEFAULT,
          },
        })}
      />
      <label className="error__label">{errors?.date?.message}</label>
    </label>
  );
};

export default Date;
