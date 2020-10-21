import React from "react";
import Select, { Styles, ValueType } from "react-select";
import { DropDownData } from "../../common/types";
import "./styles.css";

interface Props {
  title: string;
  data: DropDownData[] | undefined;
  placeholder: string;
  disabled?: boolean;
  onChangeItem?: (item: ValueType<DropDownData>) => void;
}

const customStyles: Partial<Styles> = {
  option: (provided) => ({
    ...provided,
    textAlign: "left",
  }),
  container: (provided) => ({
    ...provided,
    width: "50%",
  }),
};

export const TitledSelector = ({
  title,
  data,
  placeholder,
  onChangeItem,
  disabled,
}: Props) => {
  return (
    <div>
      <h3 className={"title"}>{title}</h3>
      <Select
        options={data}
        placeholder={placeholder}
        styles={customStyles}
        isDisabled={disabled}
        onChange={(item) => onChangeItem && onChangeItem(item)}
      />
    </div>
  );
};
