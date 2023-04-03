import { IPhoto } from '../data/types';

interface IResult {
  total: number;
  total_pages: number;
  results: IPhoto[];
}

export default async (value: string) => {
  const id = 'Toktz5_fttiBpwm0BnRkjnKZEcBIAbE2L_qVIgpLRkQ';
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${value || 'photo'}&client_id=${id}`
  );
  const result: IResult = await res.json();
  return result.results;
};
