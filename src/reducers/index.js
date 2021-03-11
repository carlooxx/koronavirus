import {
  GET_LAST_DATA_REQUEST,
  GET_LAST_DATA_SUCCESS,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
  GET_LAST_COUNTY_DATA_REQUEST,
  GET_LAST_COUNTY_DATA_SUCCESS,
} from "../action/types";

//Podatci na zadnji dan HR i Svijet
export const globalLastData = (state = { lastData: [] }, action) => {
  switch (action.type) {
    case GET_LAST_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_LAST_DATA_SUCCESS:
      return {
        ...state,
        lastData: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};

//Svi podatci od pocetka pandemije
export const croatiaAllData = (state = { allData: [] }, action) => {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_DATA_SUCCESS:
      return {
        allData: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};

//Podatci po zupanijama zadnji dan
export const countyAllData = (state = { countylastData: [] }, action) => {
  switch (action.type) {
    case GET_LAST_COUNTY_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_LAST_COUNTY_DATA_SUCCESS:
      return {
        countylastData: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};
