import { IData, IPost } from '../../../data/types';

export default (data: IData, setPost: (obj: IPost) => void) => {
  const reader = new FileReader();
  const file = data.file[0] as File;
  reader.onloadend = () => {
    const post: IPost = {
      file: reader.result as string,
      name: data.name,
      date: data.date,
      radio: data.radio,
      region: data.region,
    };
    setPost(post);
  };
  reader.readAsDataURL(file);
};
