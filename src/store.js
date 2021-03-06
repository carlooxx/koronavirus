import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  countyAllData,
  croatiaAllData,
  globalLastData,
  countyActiveData,
} from "./reducers";

const initState = {};

const reducer = combineReducers({
  globalLast: globalLastData,
  fromFirstDayData: croatiaAllData,
  countyLastData: countyAllData,
  countyAllActive: countyActiveData,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
