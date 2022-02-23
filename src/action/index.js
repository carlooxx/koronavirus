import axios from "axios";
import {
  GET_LAST_DATA_REQUEST,
  GET_LAST_DATA_SUCCESS,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
  GET_LAST_COUNTY_DATA_REQUEST,
  GET_LAST_COUNTY_DATA_SUCCESS,
  GET_ALL_COUNTY_DATA_REQUEST,
  GET_ALL_COUNTY_DATA_SUCCESS,
} from "./types";
import {
  globalLastCovid,
  globalCovid,
  croatiaLastCovid,
  croatiaCovid,
} from "../api/api";

//Podatci zadnji za Svijet i HR
export const globalLastData = () => async (dispatch) => {
  const { data } = await axios.get(globalLastCovid());

  dispatch({
    type: GET_LAST_DATA_REQUEST,
  });
  dispatch({
    type: GET_LAST_DATA_SUCCESS,
    payload: data,
  });
};

//Podatci svi od pocetka pandemije
export const croatiaAllData = () => async (dispatch) => {
  const { data } = await axios.get(globalCovid());

  dispatch({
    type: GET_ALL_DATA_REQUEST,
  });
  dispatch({
    type: GET_ALL_DATA_SUCCESS,
    payload: data,
  });
};

//Podatci zadnji po zupanijama
export const countyAllData = () => async (dispatch) => {
  const { data } = await axios.get(croatiaLastCovid());

  dispatch({
    type: GET_LAST_COUNTY_DATA_REQUEST,
  });
  dispatch({
    type: GET_LAST_COUNTY_DATA_SUCCESS,
    payload: data.PodaciDetaljno,
  });
};

//Svi podatci o broju aktivnih po zupanijama
export const countyActiveData = () => async (dispatch) => {
  const { data } = await axios.get(croatiaCovid());

  dispatch({
    type: GET_ALL_COUNTY_DATA_REQUEST,
  });
  dispatch({
    type: GET_ALL_COUNTY_DATA_SUCCESS,
    payload: data,
  });
};
