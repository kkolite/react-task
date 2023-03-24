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

interface IProps {
  setPost: (obj: IPost) => void;
}

const UserForm = ({ setPost }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IData>({
    defaultValues: {
      region: 'by',
    },
  });
  const [status, setStatus] = useState<string>('');

  const onSubmit = (data: IData) => {
    console.log(data);
    FileReader(data, setPost);
    statusMessage();
    reset();
  };

  const statusMessage = () => {
    setStatus('Success');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    console.log(files);

    if (files) setValue('file', files);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Name register={register} errors={errors} />
      <Date register={register} errors={errors} />
      <Region register={register} />
      <Radio register={register} />
      <File register={register} errors={errors} handleImg={handleImg} />
      <Check register={register} errors={errors} />
      <button className="form__submit">Submit</button>
      <label className="form__success">{status}</label>
    </form>
  );
};

export default UserForm;
