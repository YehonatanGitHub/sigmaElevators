import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';
import customerReducer from '../features/customers/customerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    customers: customerReducer,
  },
});
