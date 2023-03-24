import { IInput } from '../../data/types';

const File = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      Photo
      <input
        type="file"
        accept="image/*"
        className="form__control"
        {...register('file', {
          required: 'No file!',
        })}
      />
      <label className="error__label">{errors?.file && errors?.file?.message}</label>
    </label>
  );
};

export default File;
