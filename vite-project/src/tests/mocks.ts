import { IPhoto } from '../data/types';

export const mockValue: IPhoto = {
  id: '123',
  urls: { small: 'qwerty' },
  user: { name: 'Alex' },
  tags: [
    {
      title: 'Title',
      type: 'Type',
    },
  ],
  likes: 100,
  description: 'Desc',
};

export const mockPost = {
  name: 'Name',
  date: '2022-11-07',
  region: 'us',
  radio: 'true',
  file: '',
};
