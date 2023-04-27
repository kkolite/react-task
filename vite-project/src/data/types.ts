import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';

export interface IInputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

export interface IInput {
  register: UseFormRegister<IData>;
  errors?: FieldErrors<IData>;
}

export interface IData {
  name: string;
  date: string;
  radio: string;
  region: string;
  check: boolean;
  file: FileList;
}

export interface IInputObj {
  [key: string]: IInput;
}

export interface IPost {
  [key: string]: string;
}

export interface INullProps {
  [key: string]: never;
}

export enum EFetchParams {
  NAME = 'name',
  ICAO = 'icao',
  IATA = 'iata',
}

interface IFleet {
  [index: string]: number;
}

export interface IAirline {
  iata: string;
  icao: string;
  logo_url: string;
  name: string;
  fleet: IFleet;
}

interface IUrls {
  [key: string]: string;
}

interface IUser {
  name: string;
  [key: string]: unknown;
}

interface ITag {
  title: string;
  type: string;
}

export interface IPhoto {
  id: string;
  urls: IUrls;
  user: IUser;
  [key: string]: unknown;
  tags: ITag[];
  likes: number;
  description: string;
}
