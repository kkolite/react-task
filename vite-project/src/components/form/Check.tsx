import { TEXT } from '../../data/text';
import { IInput } from '../../data/types';

const Check = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      {TEXT.FORM.CHECK}
      <input
        type="checkbox"
        className="form__control"
        id="check"
        {...register('check', {
          required: TEXT.ERRORS.DEFAULT,
        })}
      />
      <label className="error__label">{errors?.check?.message}</label>
    </label>
  );
};

export default Check;
