import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";
import thunk from "redux-thunk";
// import authConstants from "./auth/authConstants";
import authReducers from "./auth/authReducers";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducers,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
