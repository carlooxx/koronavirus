import axios from "axios";
import { GET_LAST_DATA_REQUEST, GET_LAST_DATA_SUCCESS } from "./types";
import { globalLastCovid } from "../api/api";

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
