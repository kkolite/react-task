import { IData, IPost } from '../../data/types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import FileReader from './utils/FileReader';
import Name from './Name';
import Date from './Date';
import Region from './Region';
import Radio from './Radio';
import File from './File';
import Check from './Check';
import { TEXT } from '../../data/text';
import { useAppDispatch } from '../../store/hook';
import { addCard } from '../../store/userSlice';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const [status, setStatus] = useState<string>('');
  const dispatch = useAppDispatch();

  const setPost = (post: IPost) => {
    dispatch(addCard(post));
  };

  const onSubmit = (data: IData) => {
    FileReader(data, setPost);
    statusMessage();
    reset();
  };

  const statusMessage = () => {
    setStatus('Success');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Name register={register} errors={errors} />
      <Date register={register} errors={errors} />
      <Region register={register} errors={errors} />
      <Radio register={register} />
      <File register={register} errors={errors} />
      <Check register={register} errors={errors} />
      <button className="form__submit">{TEXT.FORM.BUTTON}</button>
      <label className="form__success">{status}</label>
    </form>
  );
};

export default UserForm;
