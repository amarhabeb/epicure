import {createSlice } from '@reduxjs/toolkit'
import { AppData } from '../../constants/data';

export const chefsSlice = createSlice({
  name: 'chefs',
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
export const { setRestaurants } = chefsSlice.actions

export default chefsSlice.reducer

