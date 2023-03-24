import React from 'react';
import { IInput } from '../../data/types';

const Check = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      I consent to my personal data
      <input
        type="checkbox"
        className="form__control"
        id="check"
        {...register('check', {
          required: 'Error',
        })}
      />
      <label className="error__label">{errors?.check && errors?.check?.message}</label>
    </label>
  );
};

export default Check;
