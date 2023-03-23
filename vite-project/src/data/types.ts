export interface IInputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

export interface IInput {
  el: HTMLInputElement;
  errorLabel: HTMLLabelElement;
  regex?: RegExp;
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
