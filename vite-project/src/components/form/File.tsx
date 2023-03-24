import { IInput } from '../../data/types';

interface IProps extends IInput {
  handleImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const File = ({ register, errors, handleImg }: IProps) => {
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
        onChange={handleImg}
      />
      <label className="error__label">{errors?.file && errors?.file?.message}</label>
    </label>
  );
};

export default File;
