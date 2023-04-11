import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { blackMarketApi } from 'services/blackMarketApi';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  [blackMarketApi.reducerPath]: blackMarketApi.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: persisterReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getMiddleWare) =>
      getMiddleWare({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(blackMarketApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
