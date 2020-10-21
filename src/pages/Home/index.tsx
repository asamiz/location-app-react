import React, { useCallback, useEffect, useReducer } from "react";
import { css } from "@emotion/core";
import { ValueType } from "react-select";
import { ClipLoader } from "react-spinners";
import { TYPES } from "../../common/enums";
import { IHomeState } from "../../common/interfaces";
import { DropDownData } from "../../common/types";
import { LocationForm } from "../../components";
import { getCitiesAreas, getCountries, getCountryCities } from "../../services";
import { HomeReducer } from "./reducer";
import "./styles.css";

const initialState: IHomeState = {
  selectedCountry: {},
  cities: [],
  areas: [],
  countries: [],
  countriesLoading: true,
};

// Loader Styles
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 200px;
`;

const Home = () => {
  const [
    { cities, areas, selectedCountry, countriesLoading, countries },
    dispatch,
  ] = useReducer(HomeReducer, initialState);

  useEffect(() => {
    onLoad();
    dispatch({ type: TYPES.COUNTRIES_LOADING, payload: false });
  }, []);

  // Cities API calling
  const onSelectCountry = useCallback(async (item: ValueType<DropDownData>) => {
    dispatch({ type: TYPES.SELECTED_COUNTRY, payload: item });
    const response = await getCountryCities(item);
    dispatch({ type: TYPES.UPDATE_CITIES, payload: response });
  }, []);

  // Areas API calling
  const onSelectCity = useCallback(
    async (item: any) => {
      dispatch({ type: TYPES.UPDATE_AREAS, payload: [] });
      // Make the request only if the country is Egypt
      if (selectedCountry?.value === "56") {
        const response = await getCitiesAreas(selectedCountry, item);
        dispatch({ type: TYPES.UPDATE_AREAS, payload: response });
      } else {
        dispatch({ type: TYPES.UPDATE_AREAS, payload: [] });
      }
    },
    [selectedCountry]
  );

  // Countries API calling (Called after rendering in useEffect)
  const onLoad = async () => {
    const response = await getCountries();
    dispatch({ type: TYPES.GET_COUNTRIES, payload: response });
  };

  return countriesLoading ? (
    <ClipLoader size={90} loading={countriesLoading} css={override} />
  ) : (
    <div className={"container"}>
      <LocationForm
        countries={countries}
        cities={cities}
        areas={areas}
        onSelectCity={(item: ValueType<DropDownData>) => onSelectCity(item)}
        onSelectCountry={(item: ValueType<DropDownData>) =>
          onSelectCountry(item)
        }
      />
    </div>
  );
};

export default Home;
