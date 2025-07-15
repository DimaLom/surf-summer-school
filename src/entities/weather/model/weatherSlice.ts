import { RootState } from '@/app/store';
import { WeatherApiResponse } from '@/entities/weather/types/WeatherApiResponse';
import { getWeather } from '@/shared/api/weather';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type WeatherState = {
  currentWeather: WeatherApiResponse | null;
};

const initialState: WeatherState = {
  currentWeather: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      const city = (getState() as RootState).city.currentCity;
      const weatherData = await getWeather(city);
      dispatch(setCurrentWeather(weatherData));
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'fetchWeather отвалился'
      );
    }
  }
);

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
