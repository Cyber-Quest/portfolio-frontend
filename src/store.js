import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

// Reducers
import portfolio_reducer from "./modules/portfolio/redux/root-reducer";

// Sagas
import portfolio_sagas from "./modules/portfolio/redux/root-sagas";

const reducers = combineReducers({
  portfolio: portfolio_reducer,
});

const persistConfig = {
  key: "portfolio",
  storage,
  blacklist: ["default"],
};

//rebuild

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

sagaMiddleware.run(portfolio_sagas);

export default {
  store,
};