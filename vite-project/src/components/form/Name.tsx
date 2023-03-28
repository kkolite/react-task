import { TEXT } from '../../data/text';
import { IInput } from '../../data/types';

const Name = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      {TEXT.FORM.NAME}
      <input
        className="form__control"
        {...register('name', {
          required: TEXT.ERRORS.DEFAULT,
          pattern: {
            value: /^[a-zA-Z0-9_-]{3,15}$/,
            message: TEXT.ERRORS.DEFAULT,
          },
        })}
      />
      <label className="error__label">{errors?.name?.message}</label>
    </label>
  );
};

export default Name;
