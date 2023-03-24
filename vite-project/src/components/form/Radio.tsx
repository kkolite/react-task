import { IInput } from '../../data/types';

const Radio = ({ register }: IInput) => {
  return (
    <fieldset id="group" className="form__radio-container">
      Relocation?
      <label>
        Yes
        <input className="form__control" type="radio" value="yes" {...register('radio')} />
      </label>
      <label>
        No
        <input
          className="form__control"
          type="radio"
          value="no"
          defaultChecked
          {...register('radio')}
        />
      </label>
    </fieldset>
  );
};

export default Radio;
