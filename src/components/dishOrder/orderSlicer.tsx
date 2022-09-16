import {createSlice } from '@reduxjs/toolkit'
import { AppData } from '../../constants/data';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: AppData.dishesArray[0]
  },
  reducers: {
    setOrders: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOrders } = orderSlice.actions

export default orderSlice.reducer