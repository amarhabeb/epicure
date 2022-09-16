import {createSlice } from '@reduxjs/toolkit'
import { AppData } from '../../constants/data';

export const profileSlice = createSlice({
  name: 'restaurants',
  initialState: {
    value: AppData.resturantsArray[0]
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = profileSlice.actions

export default profileSlice.reducer

