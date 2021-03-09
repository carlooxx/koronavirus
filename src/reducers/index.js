import { GET_LAST_DATA_REQUEST, GET_LAST_DATA_SUCCESS } from "../action/types";

export const globalLastData = (state = {}, action) => {
  switch (action.type) {
    case GET_LAST_DATA_REQUEST:
      return {
        loading: true,
      };
    case GET_LAST_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return { state };
  }
};
