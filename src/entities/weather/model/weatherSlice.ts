import { WeatherApiResponse } from '@/entities/weather/types/WeatherApiResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type WeatherState = {
  currentWeather: WeatherApiResponse | null;
};

const initialState: WeatherState = {
  currentWeather: null,
};

const weatherStore = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCurrentWeather(state, { payload }: PayloadAction<WeatherApiResponse>) {
      state.currentWeather = payload;
    },
  },
});

export const { setCurrentWeather } = weatherStore.actions;
export const weatherReducer = weatherStore.reducer;
