import { DropDownData } from "../common/types";
import { reshapeDropdownData } from "../utils/reshapData";
import client from "./client";

export async function getCountries(): Promise<DropDownData[] | undefined> {
  try {
    const response = await (await client()).get(`/countries`);
    if (response) {
      return reshapeDropdownData(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getCountryCities(
  value: any
): Promise<DropDownData[] | undefined> {
  try {
    const response = await (await client()).get(
      `/country/${value?.value}/city`
    );
    if (response) {
      return reshapeDropdownData(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getCitiesAreas(
  country: DropDownData,
  city: any
): Promise<DropDownData[] | undefined> {
  try {
    const response = await (await client()).get(
      `/country/${country.value}/city/${city?.value}/area`
    );
    if (response) {
      return reshapeDropdownData(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}
