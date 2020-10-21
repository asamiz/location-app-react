import React from "react";
import { ValueType } from "react-select";
import { DropDownData } from "../../common/types";
import { TitledSelector } from "../TitledSelector";
import "./styles.css";

interface Props {
  countries?: DropDownData[];
  cities?: DropDownData[] | undefined;
  areas?: DropDownData[] | undefined;
  onSelectCountry: (item: ValueType<DropDownData>) => void;
  onSelectCity: (item: ValueType<DropDownData>) => void;
}

export const LocationForm = ({
  countries,
  cities,
  areas,
  onSelectCountry,
  onSelectCity,
}: Props) => {
  return (
    <div>
      <h2 className={"header"}>{"Location"}</h2>
      <TitledSelector
        data={countries}
        title={"Country *"}
        placeholder={"Please select your country .."}
        onChangeItem={(item) => onSelectCountry && onSelectCountry(item)}
      />
      {cities?.length !== 0 && (
        <TitledSelector
          data={cities}
          title={"City *"}
          disabled={cities?.length === 0}
          placeholder={"Please select your city .."}
          onChangeItem={(item) => onSelectCity && onSelectCity(item)}
        />
      )}
      {areas?.length !== 0 && (
        <TitledSelector
          data={areas}
          title={"Area (Optional)"}
          placeholder={"Please select your area .."}
        />
      )}
    </div>
  );
};
