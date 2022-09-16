import {createSlice } from '@reduxjs/toolkit'
import { AppData } from '../../constants/data';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    value: AppData.resturantsArray
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurants } = restaurantsSlice.actions

export default restaurantsSlice.reducer

