import { TEXT } from '../../data/text';
import { IInput } from '../../data/types';

const File = ({ register, errors }: IInput) => {
  return (
    <label className="form__label">
      {TEXT.FORM.FILE}
      <input
        type="file"
        accept="image/*"
        className="form__control"
        {...register('file', {
          required: TEXT.ERRORS.NO_FILE,
        })}
      />
      <label className="error__label">{errors?.file?.message}</label>
    </label>
  );
};

export default File;
