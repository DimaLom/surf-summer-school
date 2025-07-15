import { weatherReducer } from '@/entities/weather/model/weatherSlice';
import { cityReducer } from '@/features/city-search/model/citySlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
