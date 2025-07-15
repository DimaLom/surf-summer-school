import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentCity: 'Москва',
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCurrentCity(state, { payload }: PayloadAction<string>) {
      state.currentCity = payload;
    },
  },
});

export const { setCurrentCity } = citySlice.actions;
export const cityReducer = citySlice.reducer;
