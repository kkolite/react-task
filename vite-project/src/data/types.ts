export interface IInputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

export interface INullProps {
  [key: string]: never
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
