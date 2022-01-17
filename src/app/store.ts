import { configureStore } from '@reduxjs/toolkit';
import weather from './slices/WeatherSlice'



export const store = configureStore({
  reducer: {
    weather
  },
  devTools: process.env.NODE_ENV !== 'production'
});




