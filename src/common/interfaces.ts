import { DropDownData } from "../common/types";

/** INTERFACES */
export interface IHomeState {
  cities: DropDownData[];
  areas: DropDownData[];
  selectedCountry: DropDownData | {};
  countries: DropDownData[];
  countriesLoading: boolean;
}

export interface IHomeAction {
  type: string;
  payload?: any;
}
