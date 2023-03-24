import { IInput } from '../../data/types';

const Name = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      Name, 3-15 symbols:
      <input
        className="form__control"
        {...register('name', {
          required: 'Error!',
          pattern: {
            value: /^[a-z0-9_-]{3,15}$/,
            message: 'Error!',
          },
        })}
      />
      <label className="error__label">{errors?.name && errors?.name?.message}</label>
    </label>
  );
};

export default Name;
