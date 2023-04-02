import { TEXT } from '../../data/text';
import { IInput } from '../../data/types';

const Radio = ({ register, errors }: IInput) => {
  return (
    <fieldset id="group" className="form__radio-container">
      Relocation?
      <label>
        Yes
        <input
          className="form__control"
          type="radio"
          value="yes"
          {...register('radio', {
            required: TEXT.ERRORS.DEFAULT,
          })}
        />
      </label>
      <label>
        No
        <input className="form__control" type="radio" value="no" {...register('radio')} />
      </label>
      <label className="error__label">{errors?.radio?.message}</label>
    </fieldset>
  );
};

export default Radio;
