import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";
import thunk from "redux-thunk";
// import authConstants from "./auth/authConstants";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducers from "./auth/authReducers";

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"]
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   auth: persistReducer(persistConfig, authReducers)
// });

// const middlewares = [thunk];

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export const persistor = persistStore(store);

// export default store;

const persistConfig = {
  key: "auth",
  storage,
  whilelist: ["email", "token", "databaseId", "isAuth"]
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistReducer(persistConfig, authReducers)
});

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default store;
