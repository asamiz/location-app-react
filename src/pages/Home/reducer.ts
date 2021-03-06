import { IHomeAction, IHomeState } from "../../common/interfaces";
import { TYPES } from "../../common/enums";

export const HomeReducer = (initialState: IHomeState, action: IHomeAction) => {
  switch (action.type) {
    case TYPES.SELECTED_COUNTRY:
      return {
        ...initialState,
        selectedCountry: action.payload,
        areas: [],
        cities: [],
      };
    case TYPES.COUNTRIES_LOADING:
      return { ...initialState, countriesLoading: action.payload };
    case TYPES.GET_COUNTRIES:
      return { ...initialState, countries: action.payload };
    case TYPES.UPDATE_CITIES:
      return { ...initialState, cities: action.payload };
    case TYPES.UPDATE_AREAS:
      return { ...initialState, areas: action.payload };
    default:
      return initialState;
  }
};
