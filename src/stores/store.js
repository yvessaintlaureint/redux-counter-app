import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Other middleware and options can be added here
  // For example:
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(yourCustomMiddleware),
  // devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development only
});

export default store;
