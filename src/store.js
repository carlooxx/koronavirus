import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { countyAllData, croatiaAllData, globalLastData } from "./reducers";

const initState = {};

const reducer = combineReducers({
  globalLast: globalLastData,
  fromFirstDayData: croatiaAllData,
  countyLastData: countyAllData,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
